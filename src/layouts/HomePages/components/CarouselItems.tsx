import React, { useEffect, useState } from 'react'
import Books from '../../../models/Books';
import Images from '../../../models/Images';
import { getAllImages } from '../../../api/ImageApi';
interface CarouselItems {
    books: Books;
}

const CarouselItems: React.FC<CarouselItems> = (props) => {

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
        <div>
            <div className="col-5 text-center">
                <img src={dataimages} className='float-end' style={{ width: '150px' }} />
            </div>
            <div className="col-7">
                <h5>{props.books.titleBook}</h5>
                <p>{props.books.description}</p>
            </div>
        </div>
    );
}
export default CarouselItems
