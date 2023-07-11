package ch.ge.ael.consoleadmin.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class ReactAppController {

    @RequestMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/*/{y:[\\w\\-]+}" })
    public String getIndex(HttpServletRequest request, HttpServletResponse response) {
        response.addHeader(HttpHeaders.CACHE_CONTROL,"no-cache,no-store,max-age=0,must-revalidate");
        response.addHeader(HttpHeaders.PRAGMA,"no-cache");
        response.addHeader(HttpHeaders.EXPIRES,"-1");
        return "/index.html";
    }
}
