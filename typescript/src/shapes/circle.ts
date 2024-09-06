class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    computeArea(): number {
        return this.radius * this.radius
    }
}

export { Circle }
