package com.seerviashish;

import java.util.ArrayList;
import java.util.List;

public class Person {
    String name;
    Gender gender;
    Person father;
    Person mother;
    Person spouse;

    List<Person> children;

    public Person(String name, Gender gender) {
        this.name = name;
        this.gender = gender;
    }

    public Person(String name, Gender gender, Person father, Person mother, Person spouse) {
        this.name = name;
        this.gender = gender;
        this.father = father;
        this.mother = mother;
        this.spouse = spouse;
    }

    public void addChild(Person child) {
        if (this.children == null) {
            this.children = new ArrayList();
        }
        this.children.add(child);
    }

    public void setSpouse(Person spouse) {
        this.spouse = spouse;
    }

    public void setFather(Person father) {
        this.father = father;
    }

    public void setMother(Person mother) {
        this.mother = mother;
    }
}
