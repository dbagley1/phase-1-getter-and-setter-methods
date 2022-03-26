// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    set circumference(circumference) {
        this.radius = circumference / Math.PI / 2;
    }
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}

const testCircle = new Circle(3);
console.log(testCircle.diameter, testCircle.circumference, testCircle.area);