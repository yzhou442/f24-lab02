package edu.cmu.cs.cs214.lab02.shapes;

public class Rectangle implements Shape {
    public double height;
    public double width;
    
    public Rectangle(double height, double width){
        this.height = height;
        this.width = width;
    }

    // override the getArea method
    @Override
    public double getArea() {
        return height * width;
    }
}
