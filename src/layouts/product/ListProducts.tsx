import React, { useEffect, useState } from 'react'
import Books from '../../models/Books';
import BooksPropeties from './components/BooksPropeties';
import { getAllBooks } from '../../api/BooksApi';
import { Pagination } from '../utils/Pagination';



const ListProducts: React.FC = () => {
    const [listProduct, setListProduct] = useState<Books[]>([]);
    const [loadData, setLoadData] = useState(true);
    const [errorData, setErrorData] = useState(null);
    // phân trang
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [tongSoSach, setTongSoSach] = useState(0);

    // lấy sản phẩm ra -1 vì trang hieenjn tại trong spring là 0
    useEffect(() => {
        getAllBooks(trangHienTai - 1).then(
            kq => {
                setListProduct(kq.ketQua);
                setTongSoTrang(kq.totalPage);
                setLoadData(false);
            }
        ).catch(
            error => {
                setErrorData(error.message);
            }
        );
    }, [trangHienTai]);

    const phanTrang = (trang: number) => setTrangHienTai(trang);

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
            <div className='row mt-4 mb-5'>
                {listProduct.length > 0 ? (
                    listProduct.map((books) => (
                        <BooksPropeties key={books.idBook} books={books} />
                    ))
                ) : (
                    <h3>Không có sách nào để hiển thị.</h3> // 
                )}
            </div>
            <Pagination pageNow={trangHienTai} totalPage={tongSoTrang} pagination={phanTrang} />
        </div>
    );

}

export default ListProducts
