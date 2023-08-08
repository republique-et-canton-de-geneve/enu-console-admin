package ch.ge.ael.consoleadmin.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RestController
@RequestMapping("/systems")
@Slf4j
@RequiredArgsConstructor
public class SystemsCheckController {

    public static ArrayList<String> SystemsList = new ArrayList<>() {{
        add("GED");
        add("Jway");
        add("PostgreSQL");
        add("MongoDB");
        add("RabbitMQ");
    }};

    @GetMapping("/list")
    public List<String> getSystemNames() {
        return SystemsList;
    }

    @GetMapping("/check")
    public Map<String,Boolean> checkSystems() {
        log.info("Systems check");
        HashMap<String,Boolean> result = new HashMap<>();
        SystemsList.forEach(system -> result.put(system, true));
        return result;
    }

    private boolean getStatusFor(String systemName) {
        switch(systemName) {
            case "GED":
                return true;
            case "Jway":
                return true;
            case "PostgreSQL":
                return true;
            case "MongoDB":
                return true;
            case "RabbitMQ":
                return true;
            default:
                log.warn("Unknown system: " + systemName);
                return false;
        }
    }
}
