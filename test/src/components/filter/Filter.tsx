import React, {useEffect, useState} from 'react'
import './filter.scss'
import {useDataContext} from "../../contexts/dataContext";

export const Filter = () => {
    const {setFilters} = useDataContext();

    const [isAll, setAll] = useState<boolean>(false);
    const [isNotOwners, setIsNotOwners] = useState<boolean>(false);
    const [isOneOwner, setIsOwner] = useState<boolean>(false);
    const [isSomeOwners, setIsSomeOwners] = useState<boolean>(false);


    useEffect(() => {
        setFilters({isAll, isNotOwners, isOneOwner, isSomeOwners})
    }, [isAll, isNotOwners, isOneOwner, isSomeOwners])
    return (
        <div className="filter">
            <div className="filter__header">ФИЛЬТР ПО ВЛАДЕЛЬЦАМ</div>
            <div className="filter__item">
                <input type='checkbox' checked={isAll} onChange={() => setAll(!isAll)} />
                <p>Все</p>
            </div>
            <div className="filter__item">
                <input type='checkbox' checked={isNotOwners} onChange={() => setIsNotOwners(!isNotOwners)} />
                <p>Без владельцев</p>
            </div>
            <div className="filter__item">
                <input type='checkbox' checked={isOneOwner} onChange={() => setIsOwner(!isOneOwner)} />
                <p>Один владелец</p>
            </div>
            <div className="filter__item">
                <input type='checkbox' checked={isSomeOwners} onChange={() => setIsSomeOwners(!isSomeOwners)}/>
                <p>Два и более владельца</p>
            </div>
        </div>
    )
}

