import React from 'react'
import { Book } from '../../models/Book';
import BookProps from './components/BookProps';

const ListProduct: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book Tin Học',
            description: 'Sách bổ ích về tin học',
            price: 42000,
            originalPrice: 50000,  // ✅ Thêm thuộc tính này
            imageUrl: '/images/books/2.jpg'

        },
        {
            id: 2,
            title: 'Book Khoa Học',
            description: 'Sách khoa học thú vị',
            price: 55000,
            originalPrice: 60000,  // ✅ Thêm thuộc tính này
            imageUrl: '/images/books/3.jpg'

        },
        {
            id: 1,
            title: 'Book Tin Học',
            description: 'Sách bổ ích về tin học',
            price: 42000,
            originalPrice: 50000,  // ✅ Thêm thuộc tính này
            imageUrl: '/images/books/5.jpg'

        },
        {
            id: 2,
            title: 'Book Khoa Học',
            description: 'Sách khoa học thú vị',
            price: 55000,
            originalPrice: 60000,  // ✅ Thêm thuộc tính này
            imageUrl: '/images/books/2.jpg'

        },
        {
            id: 1,
            title: 'Book Tin Học',
            description: 'Sách bổ ích về tin học',
            price: 42000,
            originalPrice: 50000,  // ✅ Thêm thuộc tính này
            imageUrl: '/images/books/2.jpg'

        },
        {
            id: 2,
            title: 'Book Khoa Học',
            description: 'Sách khoa học thú vị',
            price: 55000,
            originalPrice: 60000,  // ✅ Thêm thuộc tính này
            imageUrl: '/images/books/2.jpg'

        }
    ];
    return (
        <div className='container'>
            <div className='row mt-5'>
                {
                    books.map((book) => (
                        <BookProps key={book.id} book={book} />
                    ))
                }
            </div>
        </div>
    )
}

export default ListProduct
