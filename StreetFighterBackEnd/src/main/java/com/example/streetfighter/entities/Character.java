package com.example.streetfighter.entities;

public abstract class Character {
    protected String name;
    protected int pv;

    public Character(String name, int pv) {
        this.name = name;
        this.pv = pv;
    }

    public int getPv() {
        return this.pv;
    }

    public boolean isAlive() {
        return this.pv > 0 ? true : false;
    }

    public void takeDamage(int amount) {
        this.pv -= amount;
    }

    public abstract void attack(Character character);

    @Override
    public String toString() {
        return "Character [name=" + name + ", pv=" + pv + "]";
    };

}
