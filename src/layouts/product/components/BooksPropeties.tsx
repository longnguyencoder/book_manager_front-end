import React, { useEffect, useState } from 'react'
import Books from '../../../models/Books';
import Images from '../../../models/Images';
import { getAllImages } from '../../../api/ImageApi';
interface BookPropsInterface {
    books: Books;
}

const BooksPropeties: React.FC<BookPropsInterface> = (props) => {

    const idBook = props.books.idBook;

    const [listImages, setListImages] = useState<Images[]>([]);
    const [loadData, setLoadData] = useState(true);
    const [errorData, setErrorData] = useState(null);

    // lấy sản phẩm ra
    useEffect(() => {
        getAllImages(idBook).then(
            imageData => {
                setListImages(listImages);
                setLoadData(false);
            }
        ).catch(
            error => {
                setLoadData(false);
                setErrorData(error.message);

            }
        );
    }, []);




    if (loadData) {
        return (
            <div>
                <h1>đang tải dữ liệu</h1>
            </div>
        );
    }
    if (errorData) {
        return (
            <div>
                <h1>gặp lỗi: {errorData}</h1>
            </div>
        );
    }

    let dataimages: string = "";
    if (listImages[0] && listImages[0].imageData) {
        dataimages = listImages[0].imageData;
    }
    // console.log("Book data:", props.books); 
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                <img
                    src={dataimages}
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
