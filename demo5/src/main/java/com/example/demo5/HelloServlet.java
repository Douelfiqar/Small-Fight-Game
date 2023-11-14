package com.example.demo5;

import com.example.demo5.entities.Character;
import com.example.demo5.entities.Enemy;
import com.example.demo5.entities.Knight;
import com.example.demo5.entities.Loot;
import com.example.demo5.entities.Wizard;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String player = request.getParameter("playerChoosed");
        String playerName = request.getParameter("playerName");
        String map = request.getParameter("mapChoosed");

        Enemy enemy = new Enemy("Enemy1", 100, Loot.POTION);
        Character playerObject = null;

        if(player.equals("Knight")){
            playerObject = new Knight(playerName, 100);

        }else{
            playerObject = new Wizard(playerName, 100);
        }

        ObjectMapper objectMapper = new ObjectMapper();
        String playerJson = objectMapper.writeValueAsString(playerObject);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(playerJson);
    }

    public void destroy() {
    }
}