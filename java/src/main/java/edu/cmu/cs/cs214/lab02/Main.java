package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(2, 3);
        Renderer renderer = new Renderer(rectangle);

        Shape square = new Square(3);
        Renderer renderer2 = new Renderer(square);

        Shape circle = new Circle(3);
        Renderer renderer3 = new Renderer(circle);

        renderer.draw();
        renderer2.draw();
        renderer3.draw();
    }
}
