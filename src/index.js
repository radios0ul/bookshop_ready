import { Config } from "./config";
import { Slider } from "./slider";
import { BookFactory } from "./bookFactory";
import { Controller } from "./controller";
import { Cart } from "./cart";
import { Render } from "./render";

let config = new Config();
let bookFactory = new BookFactory(config);
let slider = new Slider();
let cart = new Cart();
let render = new Render(config, cart);
let controller = new Controller(bookFactory, cart, render, config);
render.controller = controller;

slider.bannerAutoSlide();
slider.bannerManualSlide();

cart.readCartFromStorage();

controller.getBooksFromGoogleApi(
  controller.activeCategory,
  config.initStartIndex
);

render.addCategoryListeners();
render.renderInCartSign();

let btnMore = document.querySelector(".shop__more-btn");

btnMore.addEventListener("click", () => {
  controller.getBooksFromGoogleApi(
    controller.activeCategory,
    controller.currentStartIndex
  );
});

//вспомогательная кнопка очистки LocalStorage
let btnClr = document.querySelector(".clr");
btnClr.addEventListener("click", () => {
  cart.clearStorage();
});
