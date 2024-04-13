export class Cart {
  constructor() {
    this.cartArr = []; //массив с ID книг, положенными в корзину
    this.itemsInCartAmount = 0; //количество книг в корзине
    this.cartItemsCounterDiv = document.querySelector(".in_cart");
  }

  addBookToCart(book) {
    // добавить ID книги в массив корзины

    this.cartArr.push(book.bookId);
    this.saveCartToStorage();
  }

  removeBookFromCart(book) {
    // убрать ID книги из массива корзины

    let bookIndx = this.cartArr.indexOf(book.bookId);
    if (bookIndx !== -1) {
      this.cartArr.splice(bookIndx, 1);
    }

    this.saveCartToStorage();
  }

  readCartFromStorage() {
    // прочитать из хранилища, что лежит в корзине

    let savedCartJson = localStorage.getItem("savedCart");
    let savedBooksIds = [];
    if (!!savedCartJson) {
      savedBooksIds = JSON.parse(savedCartJson);
      this.cartArr = savedBooksIds;
      this.itemsInCartAmount = savedBooksIds.length;
      this.cartItemsCounterDiv.classList.remove("hidden");
      this.cartItemsCounterDiv.innerHTML = this.itemsInCartAmount;
    }
  }

  saveCartToStorage() {
    // записать в хранилище, что лежит в корзине

    localStorage.setItem("savedCart", JSON.stringify(this.cartArr));
  }

  clearStorage() {
    //очистка хранилища

    localStorage.clear();
    this.cartItemsCounterDiv.classList.add("hidden");
  }
}
