import { Book } from "./book";

export class BookFactory {
  constructor(config) {
    this.books = []; //массив объектов Book, созданных из jsonа с GoogleBooksAPI
    this.config = config;
  }

  createFromJson(data) {
    // создание объекта класса Book из того, что пришло с сервера

    for (let i = 0; i < data.length; i++) {
      let currentBookId = data[i].id;

      let currentBookCategory = data[i].volumeInfo.categories; //категория

      let currentBookArtwork = data[i].volumeInfo.imageLinks.thumbnail; //ссылка на обложку

      let currentBookAuthor = data[i].volumeInfo.authors; //авторы (массив)

      let currentBookTitle = data[i].volumeInfo.title; //название

      let currentBookReview = data[i].volumeInfo.ratingsCount; //кол-во отзывов

      let currentBookDescription = data[i].volumeInfo.description; //описание

      //проверка, есть ли рейтинг
      let currentBookRating;

      if (data[i].volumeInfo.averageRating) {
        currentBookRating = data[i].volumeInfo.averageRating;
      } else {
        currentBookRating = 0;
      }

      //проверка, есть ли цена
      let currentBookPrice;

      if (data[i].saleInfo.listPrice) {
        //цена приходит в рублях, получаем из них доллары по курсу (курс в конфиге)
        currentBookPrice = `$${(
          data[i].saleInfo.listPrice.amount / this.config.dollarCurrency
        ).toFixed(2)}`;
      } else {
        currentBookPrice = "";
      }

      //если нет ссылки на обложку, вставить картинку-заглушку
      if (!currentBookArtwork) {
        currentBookArtwork = "./assets/png/template_book_cover.png";
      }

      //создание нового объекта класса book и запихивание его в массив книг
      this.books[i] = new Book(
        currentBookId,
        currentBookCategory,
        currentBookArtwork,
        currentBookAuthor,
        currentBookTitle,
        currentBookReview,
        currentBookDescription,
        currentBookRating,
        currentBookPrice
      );
    }
  }
}
