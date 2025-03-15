import React from 'react'
import Books from '../models/Books'
import { wait } from '@testing-library/user-event/dist/utils';
import { my_request } from './Request';

    interface KetQuaInterFace{
        ketQua:Books[];
        totalPage: number;
        totalBook: number;
    }


async function getBooks(duongdan:string):Promise<KetQuaInterFace> {
    const ketQua:Books[] = [];
    

        // goi phuong thuc requesst
       const response =await my_request(duongdan);
       
       const responseData = response._embedded.books; // Kiểm tra tránh lỗi null

        console.log(responseData);


        // lấy thông tin trang
        const sumPage:number= response.page.totalPages;
        const sumBook:number = response.page.totalElements;

        for(const key in responseData){
           ketQua.push({
                idBook: responseData[key].idBook,
                titleBook: responseData[key].titleBook, // có thể null
                authorBook: responseData[key].authorBook,
                ISBook: responseData[key].ISBook,
                description: responseData[key].description,
                priceFirst: responseData[key].priceFirst,
                priceSecond: responseData[key].priceSecond,
                quantity: responseData[key].quantity,
                average_rating: responseData[key].average_rating
            });
        }

    return {ketQua: ketQua, totalPage:sumPage, totalBook:sumBook};
}
export async function getAllBooks(trangHienTai:number):Promise<KetQuaInterFace> {
    // xacs ddinh duong dan
    const duongdan:string=`http://localhost:8080/books?sort=idBook,desc&size=8&page=${trangHienTai}`;
    return getBooks(duongdan);
    
}

export async function get3Books():Promise<KetQuaInterFace> {
    // xacs ddinh duong dan
    const duongdan:string='http://localhost:8080/books?sort=idBook,desc&page=0&size=3';
    return getBooks(duongdan);
    
}


