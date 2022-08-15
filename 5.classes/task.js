class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this._state * 1.5;
    }

    set state(col){
        if (col < 0) {
            this._state = 0;
        } else if (col > 100) {
            this._state = 100;
        } else {
            this._state = col;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'magazine';
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = 'book';
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount,state, type){
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'novel';
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'fantastic';
    }
};

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount,state,type,author){
        super(name, releaseDate, pagesCount,state,type, author);
        this.type = 'detective';
    }
};

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let book;
        if (book = this.books.find(item => item[type] === value)){
          return book;
        }
        else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let foundBook;
        let foundId;

        if (foundBook = this.books.find(item => item.name === bookName)){
            foundId = this.books.indexOf(foundBook);
            this.books.splice(foundId, 1);
            return foundBook;
        }

        return null
    }
}

class Student {
    constructor(name){
        this.name = name;
        this.journal = {}
    }

    addMark(mark, subject) {
        if ((mark < 1 || mark > 5) || (typeof mark !== "number")) {
          return console.log("Ошибка, оценка должна быть числом от 1 до 5")
        }

        if (this.journal[subject] === undefined) {
          this.journal[subject] = [];
        }

        return this.journal[subject].push(mark);
      }

    getAverageBySubject(subject) {
        let 
            avgMark = 0,
            sum = 0;

        if (this.journal[subject] === undefined) {
          return console.log("Несуществующий предмет");
        } else {

          if (this.journal[subject].length > 0) {
            this.journal[subject].forEach((mark) => {sum += mark});
            avgMark = sum / this.journal[subject].length;
          }
        }

        return +avgMark.toFixed(2);
    }

    getAverage(){
        let 
            arrMarks = [],
            avgAllMarks = [];

        for(let item in this.journal){
          arrMarks = arrMarks.concat(Object.values(this.journal[item]));
          avgAllMarks = arrMarks.reduce((sum, ball) => sum + ball) / arrMarks.length;
        }

        return +avgAllMarks.toFixed(2);    
    }

    exclude() {
        console.log("Исключен за попытку подделать оценки");
    }
}