class Square implements Shape {
    // add encapsulation
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    // override the computeArea method
    computeArea(): number {
        return this.sideLen * this.sideLen
    }
}

export { Square }