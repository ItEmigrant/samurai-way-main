import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message:string
    likeCount:number
}
export const Post: React.FC<PostPropsType> = (props) => {

    return (
        <div className={s.item}>
            <img className={s.img} src='https://i.pinimg.com/736x/ed/c0/d8/edc0d87c0f024c849827d5b3d1c9bcfc--monkeys-warriors.jpg' alt={"samurai"}/>
            {props.message}
            <div>
                <span>like</span>{props.likeCount}
            </div>
        </div>

    );
};

