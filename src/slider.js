export class Slider {
  constructor() {
    this.pointer1 = document.querySelector(".pointer-1");
    this.pointer2 = document.querySelector(".pointer-2");
    this.pointer3 = document.querySelector(".pointer-3");
    this.banners = document.querySelectorAll(".hero__banner-img");
    this.pointers = document.querySelectorAll(".banner-pointer");
    this.index = 0;
  }

  showBanner(imgNmbr) {
    //отображение баннера по его номеру в массиве

    for (let i = 0; i < this.banners.length; i++) {
      if (i == imgNmbr) {
        this.banners[i].classList.add("slider-active");
        this.banners[i].classList.remove("slider-inactive");
        this.pointers[i].classList.add("active-pointer");
        this.pointers[i].classList.remove("inactive-pointer");
      } else {
        this.banners[i].classList.remove("slider-active");
        this.banners[i].classList.add("slider-inactive");
        this.pointers[i].classList.remove("active-pointer");
        this.pointers[i].classList.add("inactive-pointer");
      }
    }
  }

  bannerManualSlide() {
    // смена баннеров по нажатию на поинтеры

    for (let i = 0; i < this.banners.length; i++) {
      this.pointers[i].addEventListener("click", () => {
        this.showBanner(i);
      });
    }
  }

  bannerAutoSlide() {
    // автоматическая смена баннеров

    let timer;
    this.index = 0;
    clearInterval(timer);
    timer = setInterval(() => {
      this.index++;
      if (this.index >= this.banners.length) {
        this.index = 0;
      }
      this.showBanner(this.index);
    }, 5000);
  }
}
