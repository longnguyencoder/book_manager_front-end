import React from 'react'
import Books from '../../../models/Books';
interface BookPropsInterface {
    books: Books;
}

const BooksPropeties: React.FC<BookPropsInterface> = (props) => {
    // console.log("Book data:", props.books); 
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                <img
                    src={""}
                    className="card-img-top"
                    alt={props.books.titleBook}
                    style={{ height: '200px' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.books.titleBook}</h5>
                    <p className="card-text">{props.books.description}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.books.priceFirst} VND</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{props.books.priceSecond} VND</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BooksPropeties
