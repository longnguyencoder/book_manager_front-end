import React, { useEffect, useState } from 'react'
import Books from '../../../models/Books';
import { get3Books } from '../../../api/BooksApi';
import CarouselItems from './CarouselItems';

const Carousel: React.FC = () => {

  const [listProduct, setListProduct] = useState<Books[]>([]);
  const [loadData, setLoadData] = useState(true);
  const [errorData, setErrorData] = useState(null);

  // lấy sản phẩm ra
  useEffect(() => {
    get3Books().then(
      kq => {
        setListProduct(kq.ketQua);
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
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <CarouselItems key={0} books={listProduct[0]} />
        </div>

        <div className="carousel-item " data-bs-interval="10000">
          <CarouselItems key={1} books={listProduct[1]} />
        </div>
        <div className="carousel-item " data-bs-interval="10000">
          <CarouselItems key={2} books={listProduct[2]} />
        </div>
      </div>

      {/* Nút điều hướng Trái */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Nút điều hướng Phải */}
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel
