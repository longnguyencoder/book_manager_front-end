export async function my_request(endpoint:string) {

    // truy cập đến đường dẫn
    const response = await fetch(endpoint);
    

    // neeusb trả về bị lỗi
    if(!response.ok){
        throw new Error(`no request ${endpoint}`);

    }

    return response.json();
}