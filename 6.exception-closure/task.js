function parseCount(value){
    if (Number.isNaN(Number.parseInt(value))){
        throw new Error("Невалидное значение");
    }

    return Number.parseInt(value)
}

function validateCount(value){
    try{
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle{
    constructor(s1, s2, s3){
        if (((s1 + s2) < s3) || ((s2 + s3) < s1) || ((s3 + s1) < s2)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.ab = s1;
        this.bc = s2;
        this.ca = s3;
    }

    getPerimeter(){
        return (this.ab + this.bc + this.ca);
    }

    getArea(){
        const p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.ab) * (p - this.bc) * (p - this.ca)).toFixed(3);
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b , c);
    } catch (error) {
        return {error,
            getArea(){ 
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter(){ 
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}
