package ch.ge.ael.consoleadmin.config;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.text.DateFormat;

@Configuration
public class JacksonConfiguration {

    /**
     * Configuration de Jackson (marshaller JSON).
     */
    @Bean
    @Primary
    public ObjectMapper jackson() {
        ObjectMapper jackson = new ObjectMapper();
        jackson.registerModule(new JavaTimeModule()); // Ajoute la compatibilité JSR 302
        jackson.setDateFormat(DateFormat.getDateInstance());
        jackson.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        return jackson;
    }

}
