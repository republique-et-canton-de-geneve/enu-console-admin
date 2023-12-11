package ch.ge.ael.consoleadmin.service;


import com.rabbitmq.client.impl.CredentialsProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
@Slf4j
@RequiredArgsConstructor
public class RabbitConfClient {

    @Qualifier("rabbit-webclient")
    private final WebClient rabbitConfWebClient;

    public String getCurrentTopology() {
//        log.info("Current token = " + credentialsProvider.getPassword());
        String toto = rabbitConfWebClient.get().retrieve().bodyToMono(String.class).block();
        log.info("Rabbit conf = " + toto);
        // https://aelenu.dev.etat-ge.ch/rabbitmq/api/definitions#token_type=bearer&access_token=eyJhb....wx=
        // puis basic auth avec le token JWT en mdp, user=""
        return "{}";
    }
}
