package ch.ge.ael.consoleadmin.service;


import com.rabbitmq.client.impl.CredentialsProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@RequiredArgsConstructor
public class RabbitConfClient {

    private final CredentialsProvider credentialsProvider;

    public String getCurrentTopology() {
        log.info("Current token = " + credentialsProvider.getPassword());
        return "{}";
    }
}
