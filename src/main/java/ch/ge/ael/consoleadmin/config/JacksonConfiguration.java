package ch.ge.ael.consoleadmin.config;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.StdDateFormat;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.text.DateFormat;
import java.util.TimeZone;

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
        jackson.setDateFormat(new StdDateFormat());
        jackson.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        jackson.enable(DeserializationFeature.USE_JAVA_ARRAY_FOR_JSON_ARRAY);
        jackson.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        jackson.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        jackson.setTimeZone(TimeZone.getDefault());
        return jackson;
    }

}
