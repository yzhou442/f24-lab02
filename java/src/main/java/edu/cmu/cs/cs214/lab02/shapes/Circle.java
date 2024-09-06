package edu.cmu.cs.cs214.lab02.shapes;

public class Circle implements Shape {
    // add encapsulation
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    // override the getArea method
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
