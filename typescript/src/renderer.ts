function newRenderer(shape: Shape) {
    // hide the shape by using encapsulation and polymorphism
    return {
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }