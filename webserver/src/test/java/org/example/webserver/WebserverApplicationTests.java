package org.example.webserver;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.NavigableMap;
import java.util.TreeMap;

@SpringBootTest
class WebserverApplicationTests {

    @Test
    void contextLoads() {
        TreeMap<String, String> map = new TreeMap<>();
        NavigableMap<String, String> reversedMap = map.descendingMap();
    }

}
