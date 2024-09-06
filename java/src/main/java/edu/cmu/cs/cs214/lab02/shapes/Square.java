package edu.cmu.cs.cs214.lab02.shapes;

public class Square implements Shape {
    public double sideLen;

    public Square(double sideLen) {
        this.sideLen = sideLen;
    }

    // override the getArea method
    @Override
    public double getArea() {
        return sideLen * sideLen;
    }
}
