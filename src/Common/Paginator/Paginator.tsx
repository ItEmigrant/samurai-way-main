import React from 'react';
import s from "./Paginator.module.css"
const Paginator = ({totalUsersCount, pageSize, onPageChange, currentPage}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map(p => {
                    return <span className={currentPage === p ? s.selectedPage : ''} onClick={() => {
                        onPageChange(p)
                    }}>{p}</span>
                })
            }
        </div>
    );
}

export default Paginator;

//types
type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
}