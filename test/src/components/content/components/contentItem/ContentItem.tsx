import React from 'react'
import './contentItem.scss'
import {IItem} from "../../../../api";

interface IProps extends IItem{

}

export const ContentItem:React.FC<IProps> = ({name, price, owners, dateCreated}) => {
    const data = new Date();
    const diffDate =  Math.floor((data.getTime() - dateCreated.getTime()) / (1000 * 3600 * 24) )
    return (
        <div className="content__item">
            <div className="content__item__price">{`${price} Р`}</div>
            <div className="content__item__name">
                <p>имя</p>
                <div>{name}</div>
            </div>
            <div className="content__item__owners">
                <p>владельцы</p>
                <div>{owners.length ? owners.join(', ') : 'нет'}</div>
            </div>
            <div className="content__item__date">Добавлено {diffDate} дн. назад</div>
        </div>
    )
}
