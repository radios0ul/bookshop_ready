/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\r\n  constructor(\r\n    bookId,\r\n    category,\r\n    artwork,\r\n    author,\r\n    title,\r\n    review,\r\n    description,\r\n    rating,\r\n    price\r\n  ) {\r\n    this.bookId = bookId;\r\n    this.category = category;\r\n    this.artwork = artwork;\r\n    this.author = author;\r\n    this.title = title;\r\n    this.review = review;\r\n    this.description = description;\r\n    this.rating = rating;\r\n    this.price = price;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/book.js?");

/***/ }),

/***/ "./src/bookFactory.js":
/*!****************************!*\
  !*** ./src/bookFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookFactory: () => (/* binding */ BookFactory)\n/* harmony export */ });\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n\r\n\r\nclass BookFactory {\r\n  constructor(config) {\r\n    this.books = []; //массив объектов Book, созданных из jsonа с GoogleBooksAPI\r\n    this.config = config;\r\n  }\r\n\r\n  createFromJson(data) {\r\n    // создание объекта класса Book из того, что пришло с сервера\r\n\r\n    for (let i = 0; i < data.length; i++) {\r\n      let currentBookId = data[i].id;\r\n\r\n      let currentBookCategory = data[i].volumeInfo.categories; //категория\r\n\r\n      let currentBookArtwork = data[i].volumeInfo.imageLinks.thumbnail; //ссылка на обложку\r\n\r\n      let currentBookAuthor = data[i].volumeInfo.authors; //авторы (массив)\r\n\r\n      let currentBookTitle = data[i].volumeInfo.title; //название\r\n\r\n      let currentBookReview = data[i].volumeInfo.ratingsCount; //кол-во отзывов\r\n\r\n      let currentBookDescription = data[i].volumeInfo.description; //описание\r\n\r\n      //проверка, есть ли рейтинг\r\n      let currentBookRating;\r\n\r\n      if (data[i].volumeInfo.averageRating) {\r\n        currentBookRating = data[i].volumeInfo.averageRating;\r\n      } else {\r\n        currentBookRating = 0;\r\n      }\r\n\r\n      //проверка, есть ли цена\r\n      let currentBookPrice;\r\n\r\n      if (data[i].saleInfo.listPrice) {\r\n        //цена приходит в рублях, получаем из них доллары по курсу (курс в конфиге)\r\n        currentBookPrice = `$${(\r\n          data[i].saleInfo.listPrice.amount / this.config.dollarCurrency\r\n        ).toFixed(2)}`;\r\n      } else {\r\n        currentBookPrice = \"\";\r\n      }\r\n\r\n      //если нет ссылки на обложку, вставить картинку-заглушку\r\n      if (!currentBookArtwork) {\r\n        currentBookArtwork = \"./assets/png/template_book_cover.png\";\r\n      }\r\n\r\n      //создание нового объекта класса book и запихивание его в массив книг\r\n      this.books[i] = new _book__WEBPACK_IMPORTED_MODULE_0__.Book(\r\n        currentBookId,\r\n        currentBookCategory,\r\n        currentBookArtwork,\r\n        currentBookAuthor,\r\n        currentBookTitle,\r\n        currentBookReview,\r\n        currentBookDescription,\r\n        currentBookRating,\r\n        currentBookPrice\r\n      );\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/bookFactory.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cart: () => (/* binding */ Cart)\n/* harmony export */ });\nclass Cart {\r\n  constructor() {\r\n    this.cartArr = []; //массив с ID книг, положенными в корзину\r\n    this.itemsInCartAmount = 0; //количество книг в корзине\r\n    this.cartItemsCounterDiv = document.querySelector(\".in_cart\");\r\n  }\r\n\r\n  addBookToCart(book) {\r\n    // добавить ID книги в массив корзины\r\n\r\n    this.cartArr.push(book.bookId);\r\n    this.saveCartToStorage();\r\n  }\r\n\r\n  removeBookFromCart(book) {\r\n    // убрать ID книги из массива корзины\r\n\r\n    let bookIndx = this.cartArr.indexOf(book.bookId);\r\n    if (bookIndx !== -1) {\r\n      this.cartArr.splice(bookIndx, 1);\r\n    }\r\n\r\n    this.saveCartToStorage();\r\n  }\r\n\r\n  readCartFromStorage() {\r\n    // прочитать из хранилища, что лежит в корзине\r\n\r\n    let savedCartJson = localStorage.getItem(\"savedCart\");\r\n    let savedBooksIds = [];\r\n    if (!!savedCartJson) {\r\n      savedBooksIds = JSON.parse(savedCartJson);\r\n      this.cartArr = savedBooksIds;\r\n      this.itemsInCartAmount = savedBooksIds.length;\r\n      this.cartItemsCounterDiv.classList.remove(\"hidden\");\r\n      this.cartItemsCounterDiv.innerHTML = this.itemsInCartAmount;\r\n    }\r\n  }\r\n\r\n  saveCartToStorage() {\r\n    // записать в хранилище, что лежит в корзине\r\n\r\n    localStorage.setItem(\"savedCart\", JSON.stringify(this.cartArr));\r\n  }\r\n\r\n  clearStorage() {\r\n    //очистка хранилища\r\n\r\n    localStorage.clear();\r\n    this.cartItemsCounterDiv.classList.add(\"hidden\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/cart.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Config: () => (/* binding */ Config)\n/* harmony export */ });\nclass Config {\r\n  constructor() {\r\n    this.apiKey = \"AIzaSyB6rGzWj4fFEIPWgS7LVQwV86NdfrMdZAM\"; // ключ API\r\n    this.booksLoadAmount = 6; // кол-во книг для загрузки\r\n    this.initCategory = \"Architecture\"; // исходная активная категория\r\n    this.initStartIndex = 1; // откуда начинать загрузку книг\r\n    this.dollarCurrency = 95; // условный курс доллара для расчёта цены\r\n    this.categories = {\r\n      0: \"Architecture\",\r\n      1: \"Art\",\r\n      2: \"Biography\",\r\n      3: \"Business\",\r\n      4: \"Crafts\",\r\n      5: \"Drama\",\r\n      6: \"Fiction\",\r\n      7: \"Food\",\r\n      8: \"Health\",\r\n      9: \"History\",\r\n      10: \"Humor\",\r\n      11: \"Poetry\",\r\n      12: \"Psychology\",\r\n      13: \"Science\",\r\n      14: \"Technology\",\r\n      15: \"Travel\",\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/config.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\r\n  constructor(factory, cart, render, config) {\r\n    this.factory = factory;\r\n    this.cart = cart;\r\n    this.render = render;\r\n    this.config = config;\r\n    this.currentStartIndex = 0;\r\n    this.activeCategory = \"Architecture\"; //начальная активная категория\r\n  }\r\n\r\n  async getBooksFromGoogleApi(category, startIndex) {\r\n    // запрос и получение книг с сервера\r\n\r\n    await fetch(\r\n      `https://www.googleapis.com/books/v1/volumes?q=\"subject:${category}\"&key=${this.config.apiKey}&printType=books&startIndex=${startIndex}&maxResults=${this.config.booksLoadAmount}&langRestrict=en`\r\n    )\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then((data) => {\r\n        this.updateData(data.items);\r\n        this.currentStartIndex = startIndex + this.config.booksLoadAmount;\r\n      })\r\n      .catch(() => {\r\n        console.log(\"error!\");\r\n      });\r\n  }\r\n\r\n  updateData(data) {\r\n    this.factory.createFromJson(data);\r\n\r\n    this.render.renderBooks(this.factory.books);\r\n  }\r\n\r\n  addToCart(book) {\r\n    this.cart.addBookToCart(book);\r\n  }\r\n\r\n  removeFromCart(book) {\r\n    this.cart.removeBookFromCart(book);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _bookFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookFactory */ \"./src/bookFactory.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet config = new _config__WEBPACK_IMPORTED_MODULE_0__.Config();\r\nlet bookFactory = new _bookFactory__WEBPACK_IMPORTED_MODULE_2__.BookFactory(config);\r\nlet slider = new _slider__WEBPACK_IMPORTED_MODULE_1__.Slider();\r\nlet cart = new _cart__WEBPACK_IMPORTED_MODULE_4__.Cart();\r\nlet render = new _render__WEBPACK_IMPORTED_MODULE_5__.Render(config, cart);\r\nlet controller = new _controller__WEBPACK_IMPORTED_MODULE_3__.Controller(bookFactory, cart, render, config);\r\nrender.controller = controller;\r\n\r\nslider.bannerAutoSlide();\r\nslider.bannerManualSlide();\r\n\r\ncart.readCartFromStorage();\r\n\r\ncontroller.getBooksFromGoogleApi(\r\n  controller.activeCategory,\r\n  config.initStartIndex\r\n);\r\n\r\nrender.addCategoryListeners();\r\nrender.renderInCartSign();\r\n\r\nlet btnMore = document.querySelector(\".shop__more-btn\");\r\n\r\nbtnMore.addEventListener(\"click\", () => {\r\n  controller.getBooksFromGoogleApi(\r\n    controller.activeCategory,\r\n    controller.currentStartIndex\r\n  );\r\n});\r\n\r\n//вспомогательная кнопка очистки LocalStorage\r\nlet btnClr = document.querySelector(\".clr\");\r\nbtnClr.addEventListener(\"click\", () => {\r\n  cart.clearStorage();\r\n});\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Render: () => (/* binding */ Render)\n/* harmony export */ });\nclass Render {\r\n  constructor(config, cart) {\r\n    this.controller = null;\r\n    this.booksBlockDiv = document.querySelector(\".books__block\");\r\n    this.cartItemsCounterDiv = document.querySelector(\".in_cart\");\r\n    this.config = config;\r\n    this.cart = cart;\r\n  }\r\n\r\n  async renderBooks(books) {\r\n    //создать книги из массива\r\n\r\n    await this.createCards(books);\r\n  }\r\n\r\n  descriptionTrunc(text) {\r\n    //обрезка описания книги\r\n\r\n    let currentWidth = document.documentElement.clientWidth;\r\n    let limit = 70;\r\n    if (currentWidth < 1100) {\r\n      limit = 30;\r\n    }\r\n    if (!!text) {\r\n      text = text.trim();\r\n      if (text.length <= limit) return text;\r\n      text = text.slice(0, limit);\r\n      return text.trim() + \"...\";\r\n    } else {\r\n      return \"No description\";\r\n    }\r\n  }\r\n\r\n  titleTrunc(text) {\r\n    //обрезка названия книги\r\n\r\n    let currentWidth = document.documentElement.clientWidth;\r\n    let limit = 70;\r\n    if (currentWidth < 1100) {\r\n      limit = 30;\r\n    }\r\n\r\n    if (!!text) {\r\n      text = text.trim();\r\n      if (text.length <= limit) return text;\r\n      text = text.slice(0, limit);\r\n      return text.trim() + \"...\";\r\n    } else {\r\n      return \"No title\";\r\n    }\r\n  }\r\n\r\n  authorsEnum(authors) {\r\n    //перечисление авторов через запятую с новой строки\r\n\r\n    let authorsList = \"\";\r\n\r\n    if (!authors) {\r\n      authorsList = \"No author\";\r\n      return authorsList;\r\n    }\r\n\r\n    if (authors.length > 1) {\r\n      for (let i = 0; i < authors.length; i++) {\r\n        authorsList = authorsList + authors[i] + \", </br>\";\r\n      }\r\n      // чтобы убрать автоматически добавленную запятую после последнего автора в списке:\r\n      authorsList = authorsList.slice(0, -7);\r\n    } else {\r\n      authorsList = authors;\r\n    }\r\n    return authorsList;\r\n  }\r\n\r\n  createRatingStars(book, bookCardDiv) {\r\n    //создание звездочек по значению рейтинга (округленному)\r\n\r\n    let rating = Math.floor(+book.rating);\r\n    let starsContainer = bookCardDiv.querySelector(\".card__rating\");\r\n\r\n    if (rating > 0) {\r\n      for (let i = 0; i < rating; i++) {\r\n        let starYlw = document.createElement(\"div\");\r\n        starsContainer.appendChild(starYlw);\r\n        starYlw.innerHTML = `<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n <path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"#F2C94C\"/>\r\n </svg>\r\n `;\r\n      }\r\n\r\n      for (let j = 0; j < 5 - rating; j++) {\r\n        let starGry = document.createElement(\"div\");\r\n        starsContainer.appendChild(starGry);\r\n        starGry.innerHTML = `<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"#EEEDF5\"/>\r\n  </svg>\r\n  `;\r\n      }\r\n    }\r\n  }\r\n\r\n  createCards(books) {\r\n    // создание карточек книг из массива загруженных книг\r\n\r\n    let currBook;\r\n    this.books = books;\r\n    for (let i = 0; i < this.books.length; i++) {\r\n      currBook = this.createBookCard(books[i]);\r\n\r\n      this.addBookCardToPage(currBook);\r\n    }\r\n  }\r\n\r\n  addBookCardToPage(bookCardDiv) {\r\n    // добавление новой карточки книги в html-разметку\r\n\r\n    this.booksBlockDiv.appendChild(bookCardDiv);\r\n  }\r\n\r\n  createBookCard(book) {\r\n    // отрисовка новой карточки из объекта book\r\n\r\n    let bookCardDiv = document.createElement(\"div\");\r\n    bookCardDiv.classList.add(\"card\");\r\n\r\n    book.description = this.descriptionTrunc(book.description);\r\n    book.title = this.titleTrunc(book.title);\r\n    book.author = this.authorsEnum(book.author);\r\n\r\n    bookCardDiv.innerHTML = `\r\n            <div class=\"card__cover\">\r\n              <div class=\"cover__image-container\"> <img class=\"card__cover-img\" src=\"${book.artwork}\"\r\n                  alt=\"banner\"></div>\r\n            </div>\r\n            <div class=\"card__info\">\r\n              <div class=\"card__info-container\">\r\n                <div class=\"card__author\">\r\n                  <p class=\"card__author-txt\">${book.author}</p>\r\n                </div>\r\n                <div class=\"card__title\">\r\n                  <p class=\"card__title-txt\">${book.title}</p>\r\n                </div>\r\n                <div class=\"card__rating-container\">\r\n                  <div class=\"card__rating\"></div>\r\n                  <div class=\"card__review\">\r\n                    <p class=\"card__review-txt\">${book.review} review</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card__description\">\r\n                  <p class=\"card__description-txt\">${book.description}</p>\r\n                </div>\r\n                <div class=\"card__price\">\r\n                  <p class=\"card__price-txt\">${book.price}</p>\r\n                </div><button class=\"card__buy-btn\">BUY NOW</button>\r\n              </div>\r\n            </div>\r\n         \r\n`;\r\n\r\n    this.createRatingStars(book, bookCardDiv); // создаем звездочки\r\n\r\n    let buyBtn = bookCardDiv.querySelector(\".card__buy-btn\");\r\n\r\n    // действия с корзиной при отрисовке карточки:\r\n\r\n    //проверка, нет ли текущей книжки в корзине из localstorage\r\n\r\n    for (let z = 0; z < this.cart.cartArr.length; z++) {\r\n      if (book.bookId == this.cart.cartArr[z]) {\r\n        buyBtn.classList.add(\"btn-in-cart\");\r\n        buyBtn.innerHTML = \"IN THE CART\";\r\n      }\r\n    }\r\n\r\n    // действия по кнопке \"купить\":\r\n\r\n    buyBtn.addEventListener(\"click\", () => {\r\n      if (this.cart.cartArr.includes(book.bookId) == false) {\r\n        // если нажали кнопку и книжки нет в корзине, то добавляем ее в корзину\r\n\r\n        this.controller.addToCart(book);\r\n        buyBtn.classList.add(\"btn-in-cart\");\r\n        buyBtn.innerHTML = \"IN THE CART\";\r\n        this.cartItemsCounterDiv.classList.remove(\"hidden\");\r\n        this.cart.itemsInCartAmount = this.cart.itemsInCartAmount + 1;\r\n        this.cartItemsCounterDiv.innerHTML = this.cart.itemsInCartAmount;\r\n      } else {\r\n        //если нажали кнопку и книжка уже есть в корзине, то удаляем ее из корзины\r\n\r\n        this.controller.removeFromCart(book);\r\n        buyBtn.classList.remove(\"btn-in-cart\");\r\n        buyBtn.innerHTML = \"BUY NOW\";\r\n        this.cart.itemsInCartAmount = this.cart.itemsInCartAmount - 1;\r\n        this.cartItemsCounterDiv.innerHTML = this.cart.itemsInCartAmount;\r\n        if (this.cart.itemsInCartAmount <= 0) {\r\n          this.cartItemsCounterDiv.classList.add(\"hidden\");\r\n        }\r\n      }\r\n    });\r\n\r\n    // если отзывов нет, скрыть этот элемент\r\n    if (!book.review) {\r\n      bookCardDiv.querySelector(\".card__review\").classList.add(\"hidden\");\r\n    }\r\n\r\n    return bookCardDiv;\r\n  }\r\n\r\n  addCategoryListeners() {\r\n    // навешиваем слушатели на кнопки категорий\r\n\r\n    let categoriesBtns = document.querySelectorAll(\".genres__list-btn\");\r\n    let categoryPointers = document.querySelectorAll(\".genre-pointer\");\r\n\r\n    for (let i = 0; i < categoriesBtns.length; i++) {\r\n      categoriesBtns[i].addEventListener(\"click\", () => {\r\n        categoriesBtns[i].classList.add(\"active-genre-button\");\r\n        categoryPointers[i].classList.remove(\"hidden\");\r\n\r\n        this.changeCategory(i);\r\n\r\n        for (let j = 0; j < categoriesBtns.length; j++) {\r\n          if (j != i) {\r\n            categoriesBtns[j].classList.remove(\"active-genre-button\");\r\n            categoryPointers[j].classList.add(\"hidden\");\r\n          }\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  renderInCartSign() {\r\n    // если в корзине нет книг, не отображать кол-во в корзине\r\n\r\n    if (this.cart.itemsInCartAmount <= 0) {\r\n      this.cartItemsCounterDiv.classList.add(\"hidden\");\r\n    }\r\n  }\r\n\r\n  clearBooksDiv() {\r\n    // очистка блока с карточками книг\r\n\r\n    this.booksBlockDiv.innerHTML = \"\";\r\n  }\r\n\r\n  async changeCategory(i) {\r\n    // действия при смене категории- очистить блок, загрузить книги из выбранной категории\r\n\r\n    this.controller.activeCategory = this.config.categories[i];\r\n\r\n    this.clearBooksDiv();\r\n\r\n    await this.controller.getBooksFromGoogleApi(\r\n      this.controller.activeCategory,\r\n      this.config.initStartIndex\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/render.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n  constructor() {\r\n    this.pointer1 = document.querySelector(\".pointer-1\");\r\n    this.pointer2 = document.querySelector(\".pointer-2\");\r\n    this.pointer3 = document.querySelector(\".pointer-3\");\r\n    this.banners = document.querySelectorAll(\".hero__banner-img\");\r\n    this.pointers = document.querySelectorAll(\".banner-pointer\");\r\n    this.index = 0;\r\n  }\r\n\r\n  showBanner(imgNmbr) {\r\n    //отображение баннера по его номеру в массиве\r\n\r\n    for (let i = 0; i < this.banners.length; i++) {\r\n      if (i == imgNmbr) {\r\n        this.banners[i].classList.add(\"slider-active\");\r\n        this.banners[i].classList.remove(\"slider-inactive\");\r\n        this.pointers[i].classList.add(\"active-pointer\");\r\n        this.pointers[i].classList.remove(\"inactive-pointer\");\r\n      } else {\r\n        this.banners[i].classList.remove(\"slider-active\");\r\n        this.banners[i].classList.add(\"slider-inactive\");\r\n        this.pointers[i].classList.remove(\"active-pointer\");\r\n        this.pointers[i].classList.add(\"inactive-pointer\");\r\n      }\r\n    }\r\n  }\r\n\r\n  bannerManualSlide() {\r\n    // смена баннеров по нажатию на поинтеры\r\n\r\n    for (let i = 0; i < this.banners.length; i++) {\r\n      this.pointers[i].addEventListener(\"click\", () => {\r\n        this.showBanner(i);\r\n      });\r\n    }\r\n  }\r\n\r\n  bannerAutoSlide() {\r\n    // автоматическая смена баннеров\r\n\r\n    let timer;\r\n    this.index = 0;\r\n    clearInterval(timer);\r\n    timer = setInterval(() => {\r\n      this.index++;\r\n      if (this.index >= this.banners.length) {\r\n        this.index = 0;\r\n      }\r\n      this.showBanner(this.index);\r\n    }, 5000);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://2024.02.29-booksshop/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;