export class Book {
  constructor(
    bookId,
    category,
    artwork,
    author,
    title,
    review,
    description,
    rating,
    price
  ) {
    this.bookId = bookId;
    this.category = category;
    this.artwork = artwork;
    this.author = author;
    this.title = title;
    this.review = review;
    this.description = description;
    this.rating = rating;
    this.price = price;
  }
}
