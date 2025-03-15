
import React from "react"
interface PaginationInterface {
    pageNow: number;
    totalPage: number;
    pagination: any

}


export const Pagination: React.FC<PaginationInterface> = (props) => {

    // tạo 1 mảng hiển thị phân trang
    const listPage = [];
    console.log("Trang hiện tại:", props.pageNow);
    if (props.pageNow === 1) {
        listPage.push(props.pageNow);
        if (props.totalPage >= props.pageNow + 1) {
            listPage.push(props.pageNow + 1)
        }
        if (props.totalPage >= props.pageNow + 2) {
            listPage.push(props.pageNow + 2)
        }
    } else if (props.pageNow > 1) {
        if (props.pageNow >= 3) {
            listPage.push(props.pageNow - 2)
        }
        if (props.pageNow >= 3) {
            listPage.push(props.pageNow - 1)
        }

        // trang hiện tại
        listPage.push(props.pageNow)
        console.log("Trang hiện tại:", props.pageNow);


        // trang +1
        if (props.totalPage >= props.pageNow + 1) {
            listPage.push(props.pageNow + 1)
        }
        // trang +2
        if (props.totalPage >= props.pageNow + 2) {
            listPage.push(props.pageNow + 2)
        }
    }
    return (

        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => props.pagination(1)}>
                    <button className="page-link" >Trang Đầu</button>
                </li>
                {
                    listPage.map(trang => (
                        <li className="page-item " key={trang} onClick={() => props.pagination(trang)}>
                            <button className={"page-link " + (props.pageNow === trang ? "active" : "")}
                            >{trang}</button>
                        </li>
                    ))
                }
                <li className="page-item" onClick={() => props.pagination(props.totalPage)}>
                    <button className="page-link" >Trang Cuối</button>
                </li>
            </ul>
        </nav>
    );
}