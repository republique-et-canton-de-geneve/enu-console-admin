package ch.ge.ael.consoleadmin.config;

import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.util.ResourceUtils;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

import javax.net.ssl.TrustManagerFactory;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;

@Configuration
public class RabbitConfWebClient {
    @Value("#{systemProperties['javax.net.ssl.trustStore']}")
    private String trustStorePath;
    @Value("#{systemProperties['javax.net.ssl.trustStorePassword']}")
    private String trustStorePassword;

    @Value("${app.rabbitmq.adminhost}")
    private String adminHostUrl;

    public WebClient rabbitConfWebClient() throws IOException, KeyStoreException, CertificateException, NoSuchAlgorithmException {
        final KeyStore trustStore;
        trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
        trustStore.load(new FileInputStream(ResourceUtils.getFile(trustStorePath)), trustStorePassword.toCharArray());
        final TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        trustManagerFactory.init(trustStore);
        SslContext sslContext = SslContextBuilder
                .forClient()
                .trustManager(trustManagerFactory)
                .build();
        HttpClient httpClient= HttpClient.create().secure(t -> t.sslContext(sslContext));

        return WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .baseUrl(adminHostUrl)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }
}
