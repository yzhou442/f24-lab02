class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // override the computeArea method
    computeArea(): number {
        return this.width * this.height
    }
}

export { Rectangle }
