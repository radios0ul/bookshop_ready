export class Render {
  constructor(config, cart) {
    this.controller = null;
    this.booksBlockDiv = document.querySelector(".books__block");
    this.cartItemsCounterDiv = document.querySelector(".in_cart");
    this.config = config;
    this.cart = cart;
  }

  async renderBooks(books) {
    //создать книги из массива

    await this.createCards(books);
  }

  descriptionTrunc(text) {
    //обрезка описания книги

    let currentWidth = document.documentElement.clientWidth;
    let limit = 70;
    if (currentWidth < 1100) {
      limit = 30;
    }
    if (!!text) {
      text = text.trim();
      if (text.length <= limit) return text;
      text = text.slice(0, limit);
      return text.trim() + "...";
    } else {
      return "No description";
    }
  }

  titleTrunc(text) {
    //обрезка названия книги

    let currentWidth = document.documentElement.clientWidth;
    let limit = 70;
    if (currentWidth < 1100) {
      limit = 30;
    }

    if (!!text) {
      text = text.trim();
      if (text.length <= limit) return text;
      text = text.slice(0, limit);
      return text.trim() + "...";
    } else {
      return "No title";
    }
  }

  authorsEnum(authors) {
    //перечисление авторов через запятую с новой строки

    let authorsList = "";

    if (!authors) {
      authorsList = "No author";
      return authorsList;
    }

    if (authors.length > 1) {
      for (let i = 0; i < authors.length; i++) {
        authorsList = authorsList + authors[i] + ", </br>";
      }
      // чтобы убрать автоматически добавленную запятую после последнего автора в списке:
      authorsList = authorsList.slice(0, -7);
    } else {
      authorsList = authors;
    }
    return authorsList;
  }

  createRatingStars(book, bookCardDiv) {
    //создание звездочек по значению рейтинга (округленному)

    let rating = Math.floor(+book.rating);
    let starsContainer = bookCardDiv.querySelector(".card__rating");

    if (rating > 0) {
      for (let i = 0; i < rating; i++) {
        let starYlw = document.createElement("div");
        starsContainer.appendChild(starYlw);
        starYlw.innerHTML = `<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#F2C94C"/>
 </svg>
 `;
      }

      for (let j = 0; j < 5 - rating; j++) {
        let starGry = document.createElement("div");
        starsContainer.appendChild(starGry);
        starGry.innerHTML = `<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
  </svg>
  `;
      }
    }
  }

  createCards(books) {
    // создание карточек книг из массива загруженных книг

    let currBook;
    this.books = books;
    for (let i = 0; i < this.books.length; i++) {
      currBook = this.createBookCard(books[i]);

      this.addBookCardToPage(currBook);
    }
  }

  addBookCardToPage(bookCardDiv) {
    // добавление новой карточки книги в html-разметку

    this.booksBlockDiv.appendChild(bookCardDiv);
  }

  createBookCard(book) {
    // отрисовка новой карточки из объекта book

    let bookCardDiv = document.createElement("div");
    bookCardDiv.classList.add("card");

    book.description = this.descriptionTrunc(book.description);
    book.title = this.titleTrunc(book.title);
    book.author = this.authorsEnum(book.author);

    bookCardDiv.innerHTML = `
            <div class="card__cover">
              <div class="cover__image-container"> <img class="card__cover-img" src="${book.artwork}"
                  alt="banner"></div>
            </div>
            <div class="card__info">
              <div class="card__info-container">
                <div class="card__author">
                  <p class="card__author-txt">${book.author}</p>
                </div>
                <div class="card__title">
                  <p class="card__title-txt">${book.title}</p>
                </div>
                <div class="card__rating-container">
                  <div class="card__rating"></div>
                  <div class="card__review">
                    <p class="card__review-txt">${book.review} review</p>
                  </div>
                </div>
                <div class="card__description">
                  <p class="card__description-txt">${book.description}</p>
                </div>
                <div class="card__price">
                  <p class="card__price-txt">${book.price}</p>
                </div><button class="card__buy-btn">BUY NOW</button>
              </div>
            </div>
         
`;

    this.createRatingStars(book, bookCardDiv); // создаем звездочки

    let buyBtn = bookCardDiv.querySelector(".card__buy-btn");

    // действия с корзиной при отрисовке карточки:

    //проверка, нет ли текущей книжки в корзине из localstorage

    for (let z = 0; z < this.cart.cartArr.length; z++) {
      if (book.bookId == this.cart.cartArr[z]) {
        buyBtn.classList.add("btn-in-cart");
        buyBtn.innerHTML = "IN THE CART";
      }
    }

    // действия по кнопке "купить":

    buyBtn.addEventListener("click", () => {
      if (this.cart.cartArr.includes(book.bookId) == false) {
        // если нажали кнопку и книжки нет в корзине, то добавляем ее в корзину

        this.controller.addToCart(book);
        buyBtn.classList.add("btn-in-cart");
        buyBtn.innerHTML = "IN THE CART";
        this.cartItemsCounterDiv.classList.remove("hidden");
        this.cart.itemsInCartAmount = this.cart.itemsInCartAmount + 1;
        this.cartItemsCounterDiv.innerHTML = this.cart.itemsInCartAmount;
      } else {
        //если нажали кнопку и книжка уже есть в корзине, то удаляем ее из корзины

        this.controller.removeFromCart(book);
        buyBtn.classList.remove("btn-in-cart");
        buyBtn.innerHTML = "BUY NOW";
        this.cart.itemsInCartAmount = this.cart.itemsInCartAmount - 1;
        this.cartItemsCounterDiv.innerHTML = this.cart.itemsInCartAmount;
        if (this.cart.itemsInCartAmount <= 0) {
          this.cartItemsCounterDiv.classList.add("hidden");
        }
      }
    });

    // если отзывов нет, скрыть этот элемент
    if (!book.review) {
      bookCardDiv.querySelector(".card__review").classList.add("hidden");
    }

    return bookCardDiv;
  }

  addCategoryListeners() {
    // навешиваем слушатели на кнопки категорий

    let categoriesBtns = document.querySelectorAll(".genres__list-btn");
    let categoryPointers = document.querySelectorAll(".genre-pointer");

    for (let i = 0; i < categoriesBtns.length; i++) {
      categoriesBtns[i].addEventListener("click", () => {
        categoriesBtns[i].classList.add("active-genre-button");
        categoryPointers[i].classList.remove("hidden");

        this.changeCategory(i);

        for (let j = 0; j < categoriesBtns.length; j++) {
          if (j != i) {
            categoriesBtns[j].classList.remove("active-genre-button");
            categoryPointers[j].classList.add("hidden");
          }
        }
      });
    }
  }

  renderInCartSign() {
    // если в корзине нет книг, не отображать кол-во в корзине

    if (this.cart.itemsInCartAmount <= 0) {
      this.cartItemsCounterDiv.classList.add("hidden");
    }
  }

  clearBooksDiv() {
    // очистка блока с карточками книг

    this.booksBlockDiv.innerHTML = "";
  }

  async changeCategory(i) {
    // действия при смене категории- очистить блок, загрузить книги из выбранной категории

    this.controller.activeCategory = this.config.categories[i];

    this.clearBooksDiv();

    await this.controller.getBooksFromGoogleApi(
      this.controller.activeCategory,
      this.config.initStartIndex
    );
  }
}
