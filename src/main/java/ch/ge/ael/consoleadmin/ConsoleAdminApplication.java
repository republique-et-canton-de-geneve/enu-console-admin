package ch.ge.ael.consoleadmin;

import lombok.extern.slf4j.Slf4j;
import org.bson.UuidRepresentation;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoClientSettingsBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Slf4j
public class ConsoleAdminApplication {

    public static void main(String[] args) {
        System.setProperty("spring.config.name", "enu-console-admin");
        SpringApplication.run(ConsoleAdminApplication.class, args);
    }

    @Bean
    public MongoClientSettingsBuilderCustomizer mongoClientSettingsBuilderCustomizer() {
        return clientSettingsBuilder -> clientSettingsBuilder.uuidRepresentation(UuidRepresentation.JAVA_LEGACY);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("GET","POST","PUT","DELETE","OPTIONS","HEAD");
//                        .allowedOrigins("http://localhost:1234");
//                        .allowCredentials(true)
//                        .allowedHeaders("origin, content-type, accept, authorization")
            }
        };
    }
}
