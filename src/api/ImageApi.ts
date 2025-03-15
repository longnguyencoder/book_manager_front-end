import React from 'react'
import Books from '../models/Books'
import { wait } from '@testing-library/user-event/dist/utils';
import { my_request } from './Request';
import Images from '../models/Images';

async function getOneBook(duongdan: string ):Promise<Images[]> {
    const ketQua:Images[] = [];
    

        // goi phuong thuc requesst
       const response =await my_request(duongdan);
       
       const responseData = response._embedded.imageBooks; // Kiểm tra tránh lỗi null

        // console.log(responseData);
        for(const key in responseData){
           ketQua.push({
            idImage:responseData[key].idImage,
            imageName: responseData[key].imageName,
            laIcon: responseData[key].laIcon,
            imagePath: responseData[key].imagePath,
            imageData: responseData[key].imageData
            });
        }

    return ketQua;
    
}


export async function getAllImages(idBook:number):Promise<Images[]> {
    
    // xacs ddinh duong dan
    const duongdan: string = `http://localhost:8080/books/${idBook}/imageBookList`;
    return getOneBook(duongdan);
}

export async function getOneImagesBook(idBook:number):Promise<Images[]> {
    
    // xacs ddinh duong dan
    const duongdan: string = `http://localhost:8080/books/${idBook}/imageBookList?sort=idImage,asc&page=0&size=1`;
    return getOneBook(duongdan);
}


