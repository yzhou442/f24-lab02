import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Square } from "./shapes/square.js";
import { Circle } from "./shapes/circle.js";


const rectangle: Shape = new Rectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();

const square: Shape = new Square(3)
const renderer2 = newRenderer(square)
renderer2.draw();

const circle: Shape = new Circle(3)
const renderer3 = newRenderer(circle)
renderer3.draw();