class Circle implements Shape {
    // add encapsulation
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // override the computeArea method
    computeArea(): number {
        return this.radius * this.radius
    }
}

export { Circle }
