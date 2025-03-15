import React from 'react'
import Books from '../models/Books'
import { wait } from '@testing-library/user-event/dist/utils';
import { my_request } from './Request';

async function getBooks(duongdan:string):Promise<Books[]> {
    const ketQua:Books[] = [];
    

        // goi phuong thuc requesst
       const response =await my_request(duongdan);
       
       const responseData = response._embedded.books; // Kiểm tra tránh lỗi null

        console.log(responseData);
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

    return ketQua;
}
export async function getAllBooks():Promise<Books[]> {
    // xacs ddinh duong dan
    const duongdan:string='http://localhost:8080/books?sort=idBook,desc';
    return getBooks(duongdan);
    
}

export async function get3Books():Promise<Books[]> {
    // xacs ddinh duong dan
    const duongdan:string='http://localhost:8080/books?sort=idBook,desc&page=0&size=3';
    return getBooks(duongdan);
    
}


