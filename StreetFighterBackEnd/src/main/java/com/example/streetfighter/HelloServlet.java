package com.example.streetfighter;

import com.example.streetfighter.entities.*;
import com.example.streetfighter.entities.Character;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        List<Character> characterList = new ArrayList<>();
        characterList.add(new Enemy("Idi", 100, Loot.POTION));
        characterList.add(new Wizard("Yassuo", 100));
        characterList.add(new Knight("Yone", 100));

        characterList.forEach(System.out::println);
    }

    public void destroy() {
    }
}