class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - геометрична фігура з чотирма однаковими сторонами та чотирма прямими кутами.");
    }

    length() {
        console.log("Сума довжин сторін квадрата:", 4 * this.a);
    }

    square() {
        console.log("Площа квадрата:", this.a ** 2);
    }

    info() {
        console.log("Інформація про квадрат:");
        console.log("Довжина сторони:", this.a);
        this.length();
        this.square();
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник - геометрична фігура з двома паралельними сторонами, які необхідно різні.");
    }

    length() {
        console.log("Периметр прямокутника:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа прямокутника:", this.a * this.b);
    }

    info() {
        console.log("Інформація про прямокутник:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        this.length();
        this.square();
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб - геометрична фігура з чотирма однаковими сторонами та двома тупими кутами.");
    }

    length() {
        console.log("Периметр ромба:", 4 * this.a);
    }

    square() {
        console.log("Площа ромба:", (this.a ** 2) * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Інформація про ромб:");
        console.log("Довжина сторони:", this.a);
        console.log("Тупий кут:", this.alpha);
        console.log("Гострий кут:", this.beta);
        this.length();
        this.square();
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм - геометрична фігура з протилежними сторонами рівної довжини та паралельними протилежними сторонами.");
    }

    length() {
        console.log("Периметр паралелограма:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа паралелограма:", this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Інформація про паралелограм:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        console.log("Тупий кут:", this.alpha);
        console.log("Гострий кут:", this.beta);
        this.length();
        this.square();
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const square = new Square(7.5);
square.info();

const rectangle = new Rectangle(4, 8.5);
rectangle.info();

const rhombus = new Rhombus(5, 60, 120);
rhombus.info();

const parallelogram = new Parallelogram(4, 6, 60, 120);
parallelogram.info();
