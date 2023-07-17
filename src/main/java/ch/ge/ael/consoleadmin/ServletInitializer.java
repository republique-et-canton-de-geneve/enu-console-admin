package ch.ge.ael.consoleadmin;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;

/**
 * This class has to be in Spring context so the Spring Boot app starts in a Tomcat / WAR
 */
@Configuration
@Slf4j
public class ServletInitializer extends SpringBootServletInitializer {
    private final String tomcatHome = System.getProperty("catalina.home");

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        log.debug("ServletInitializer -> startup with tomcatHome = " + tomcatHome);
        return builder.sources(ConsoleAdminApplication.class)
                .properties("spring.config.name:enu-console-admin")
                .properties("spring.config.location:classpath:/," + tomcatHome + "/conf/");
    }
}
