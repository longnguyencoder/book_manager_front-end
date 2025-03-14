class Books{

    idBook: number;
  titleBook?: string; // có thể null
  authorBook?: string;
  ISBook?: string;
  description?: string;
  priceFirst?: number;
  priceSecond?: number;
  quantity?: number;
  average_rating?: number;

//   listCategory: Category[];
//   imageBookList: ImageBook[];
//   ratingList: Rating[];
//   detailOrdersList: DetailOrder[];
//   bookFavoriteList: BookFavorite[];

  constructor(
    idBook: number,
    titleBook?: string,
    authorBook?: string,
    ISBook?: string,
    description?: string,
    priceFirst?: number,
    priceSecond?: number,
    quantity?: number,
    average_rating?: number,
    // listCategory: Category[] = [],
    // imageBookList: ImageBook[] = [],
    // ratingList: Rating[] = [],
    // detailOrdersList: DetailOrder[] = [],
    // bookFavoriteList: BookFavorite[] = []
  ) {
    this.idBook = idBook;
    this.titleBook = titleBook;
    this.authorBook = authorBook;
    this.ISBook = ISBook;
    this.description = description;
    this.priceFirst = priceFirst;
    this.priceSecond = priceSecond;
    this.quantity = quantity;
    this.average_rating = average_rating;
    // this.listCategory = listCategory;
    // this.imageBookList = imageBookList;
    // this.ratingList = ratingList;
    // this.detailOrdersList = detailOrdersList;
    // this.bookFavoriteList = bookFavoriteList;
  }
}
export default Books;