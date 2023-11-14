package com.example.demo5.entities;

public class Player extends Character {
    private int experience;


    public Player(String name, int pv) {
        super(name, pv);
    }

    @Override
    public void attack(Character character) {
        character.takeDamage(10);
        this.experience += 10;
    }
}
