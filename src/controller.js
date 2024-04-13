export class Controller {
  constructor(factory, cart, render, config) {
    this.factory = factory;
    this.cart = cart;
    this.render = render;
    this.config = config;
    this.currentStartIndex = 0;
    this.activeCategory = "Architecture"; //начальная активная категория
  }

  async getBooksFromGoogleApi(category, startIndex) {
    // запрос и получение книг с сервера

    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${this.config.apiKey}&printType=books&startIndex=${startIndex}&maxResults=${this.config.booksLoadAmount}&langRestrict=en`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.updateData(data.items);
        this.currentStartIndex = startIndex + this.config.booksLoadAmount;
      })
      .catch(() => {
        console.log("error!");
      });
  }

  updateData(data) {
    this.factory.createFromJson(data);

    this.render.renderBooks(this.factory.books);
  }

  addToCart(book) {
    this.cart.addBookToCart(book);
  }

  removeFromCart(book) {
    this.cart.removeBookFromCart(book);
  }
}
