package ch.ge.ael.consoleadmin.config;

import com.rabbitmq.client.impl.CredentialsProvider;
import io.netty.handler.codec.http.HttpStatusClass;
import io.netty.handler.codec.http.cookie.Cookie;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.util.ResourceUtils;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

import javax.net.ssl.TrustManagerFactory;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.util.ArrayList;
import java.util.List;

@Configuration
@Slf4j
@RequiredArgsConstructor
public class RabbitConfWebClient {
    @Value("#{systemProperties['javax.net.ssl.trustStore']}")
    private String trustStorePath;
    @Value("#{systemProperties['javax.net.ssl.trustStorePassword']}")
    private String trustStorePassword;

    @Bean
    public SslContext sslContext() throws IOException, KeyStoreException, NoSuchAlgorithmException, CertificateException {
        final KeyStore trustStore;
        trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
        trustStore.load(new FileInputStream(ResourceUtils.getFile(trustStorePath)), trustStorePassword.toCharArray());
        final TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        trustManagerFactory.init(trustStore);
        return SslContextBuilder
                .forClient()
                .trustManager(trustManagerFactory)
                .build();
    }

    @Value("${app.rabbitmq.adminhost}")
    private String adminHostUrl;

    private final CredentialsProvider credentialsProvider;

    @Bean("rabbit-webclient")
    public WebClient rabbitConfWebClient(SslContext sslContext) {
        List<Cookie> currentCookies = new ArrayList<>();

        log.info("Bearer token = " + credentialsProvider.getPassword());
        HttpClient httpClient= HttpClient.create()
                .secure(t -> t.sslContext(sslContext))
                .followRedirect(
                        (req, res) -> {
                            if(res.status().codeClass().equals(HttpStatusClass.REDIRECTION)) {
                                log.debug("Got redirected from  " + req.uri());
                                log.debug("Redirect to {}", res.responseHeaders().get("Location"));
                                log.debug("Response headers = " + res.responseHeaders());
                                currentCookies.clear();
                                res.cookies().forEach((charSequence, cookiesSet) -> currentCookies.addAll(cookiesSet));
                                log.debug("Added cookies: " + currentCookies);
                                return true;
                            }
                            else {
                                log.debug("Response no redirect: response = " + res.status().codeClass());
                            }
                            return false;
                        },
                        req -> {
                            log.debug("new query: adding Bearer header for " + req.uri());
                            req.addHeader(HttpHeaders.AUTHORIZATION, "Bearer " + credentialsProvider.getPassword());
                            for(Cookie cookie : currentCookies) {
                                log.debug("Adding cookie: {}", cookie.name());
                                req.addCookie(cookie);
                            }
                        });

        return WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .baseUrl(adminHostUrl + "#token_type=bearer&access_token=" + credentialsProvider.getPassword())
//                .defaultHeaders(header -> header.setBasicAuth("x", credentialsProvider.getPassword()))
                // erreur 406 si on passe un basic auth
                .defaultHeader(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br")
                .defaultHeader(HttpHeaders.CONNECTION, "Keep-Alive")
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.ALL_VALUE)
                .build();
    }
}
