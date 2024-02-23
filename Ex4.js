class Shape { //ถ้าต้องการเปลี่ยนผลลัพธ์ของสีหรือ ค่า True ต้องเปลี่ยนให้ครบทุกจุดภายใน Class ด้วย
    constructor(color = "red", filled = true) {
        this.color = color;
        this.filled = filled;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    isFilled() {
        return this.filled;
    }

    setFilled(filled) {
        this.filled = filled;
    }

    toString() {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}

class Circle extends Shape {
    constructor(radius = 1.0, color = "red", filled = true) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}

class Rectangle extends Shape {
    constructor(width = 1.0, length = 1.0, color = "red", filled = true) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getLength() {
        return this.length;
    }

    setLength(length) {
        this.length = length;
    }

    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return 2 * (this.width + this.length);
    }

    toString() {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${
      this.length
    }]`;
    }
}

class Square extends Rectangle {
    constructor(side = 1.0, color = "red", filled = true) {
        super(side, side, color, filled);
    }

    getSide() {
        return this.width;
    }

    setSide(side) {
        this.width = side;
        this.length = side;
    }

    toString() {
        return `Square[${super.toString()}]`;
    }
}

const main = () => { //จุดเปลี่ยนขนาดของเเต่ละหมวด
    const circle = new Circle(5);
    const rectangle = new Rectangle(4, 5);
    const square = new Square(6);

    console.log(circle.toString()); //เเสดงผลลัพธ์Circle   // "Circle[Shape[color=red, filled=true], radius=5]"

    console.log(rectangle.toString()); //เเสดงผลลัพธ์Rectangle  // "Rectangle[Shape[color=red, filled=true], width=4, length=5]"

    console.log(square.toString()); //เเสดงผลลัพธ์Square // "Square[Rectangle[Shape[color=red, filled=true], width=6, length=6]]"          
};

main();