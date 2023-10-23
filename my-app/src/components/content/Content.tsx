import React, {useEffect, useState} from 'react'
import './content.scss'
import {ContentList} from "./components/ contentList/ContentList";
import {useDataContext} from "../../contexts/dataContext";
import {TypeSort} from "../../hooks/useData";

export const Content = () => {
    const {sortItems} = useDataContext();

    const [currentButton, setCurrentButton] = useState<TypeSort>(TypeSort.NEW)

    const handleClickByLeftButton = () => {
        setCurrentButton(TypeSort.NEW)
    }

    const handleClickByRightButton = () => {
        setCurrentButton(TypeSort.CHEAP)
    }

    useEffect(() => {
        if(sortItems) {
            sortItems(currentButton)
        }
    }, [currentButton])

    return (
        <div className="content">
            <div className="header_content">
                <button
                    onClick={handleClickByLeftButton}
                    className={`header_content__button_left  ${currentButton === TypeSort.NEW && 'active'}`}>
                    САМЫЕ НОВЫЕ
                </button>
                <button
                    onClick={handleClickByRightButton}
                    className={`header_content__button_right  ${currentButton === TypeSort.CHEAP && 'active'}`}>
                    САМЫЕ ДЕШЕВЫЕ
                </button>
            </div>
            <ContentList />           
        </div>
    )
}

