class Book {
    constructor (name, author, publishDate){
        this.name = name;
        this.author = author;
        this.publishDate = publishDate;
    }

    printInfo(){
        console.log(`Book name: ${this.name}\nAuthor: ${this.author}\nPublish date: ${this.publishDate}`);
    }
}

class Ebook extends Book {
    constructor (name, author, publishDate, price){
        super(name, author, publishDate);

        this.price = price;
    }

    printInfo(){
        super.printInfo();
        console.log(`Price: ${this.price}`)
    }
}

let ebook = new Ebook('Book', 'author', '11.11.1111', '120');

ebook.printInfo();