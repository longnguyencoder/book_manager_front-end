import React, { useEffect, useState } from 'react'
import Books from '../../models/Books';
import BooksPropeties from './components/BooksPropeties';
import { getAllBooks } from '../../api/BooksApi';
import { error } from 'console';



const ListProducts: React.FC = () => {
    const [listProduct, setListProduct] = useState<Books[]>([]);
    const [loadData, setLoadData] = useState(true);
    const [errorData, setErrorData] = useState(null);

    // lấy sản phẩm ra
    useEffect(() => {
        getAllBooks().then(
            bookData => {
                setListProduct(bookData);
                setLoadData(false);
            }
        ).catch(
            error => {
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
    return (
        <div className='container'>
            <div className='row mt-4'>
                {listProduct.length > 0 ? (
                    listProduct.map((books) => (
                        <BooksPropeties key={books.idBook} books={books} />
                    ))
                ) : (
                    <h3>Không có sách nào để hiển thị.</h3> // ✅ Thêm kiểm tra nếu không có dữ liệu
                )}
            </div>
        </div>
    );

}

export default ListProducts
