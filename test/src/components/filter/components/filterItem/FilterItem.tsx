import React from 'react'
import './filterItem.scss'

interface IProps {
    name: string
}
export const FilterItem: React.FC<IProps> = ({ name }) => {
    return (
        <div className="filter__item">
            <input type='checkbox' />
            <p>{name}</p>
        </div>
    )
}

