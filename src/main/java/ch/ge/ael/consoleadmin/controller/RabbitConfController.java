package ch.ge.ael.consoleadmin.controller;

import ch.ge.ael.consoleadmin.service.RabbitConfClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Service
@RestController
@RequestMapping("/rabbit")
@Slf4j
@RequiredArgsConstructor
public class RabbitConfController {

    private final RabbitConfClient rabbitConfClient;

    @GetMapping("/topology")
    public String getCurrentTopogy() {
        return rabbitConfClient.getCurrentTopology();
    }
}
