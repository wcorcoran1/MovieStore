export class Movie {
    public title: string;
    public genre: string;
    public description: string;
    public price: string;

    constructor(title: string, genre: string, description: string, price: string){
        this.title = title;
        this.genre = genre;
        this.description = description
        this.price = price
    }
}