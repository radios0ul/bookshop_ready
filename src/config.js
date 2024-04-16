export class Config {
  constructor() {
    this.apiKey = "AIzaSyB6rGzWj4fFEIPWgS7LVQwV86NdfrMdZAM"; // ключ API
    this.booksLoadAmount = 6; // кол-во книг для загрузки
    this.initCategory = "Architecture"; // исходная активная категория
    this.initStartIndex = 1; // откуда начинать загрузку книг
    this.dollarCurrency = 95; // условный курс доллара для расчёта цены
    this.categories = {
      0: "Architecture",
      1: "Art",
      2: "Biography",
      3: "Business",
      4: "Crafts",
      5: "Drama",
      6: "Fiction",
      7: "Food",
      8: "Health",
      9: "History",
      10: "Humor",
      11: "Poetry",
      12: "Psychology",
      13: "Science",
      14: "Technology",
      15: "Travel",
    };
  }
}
