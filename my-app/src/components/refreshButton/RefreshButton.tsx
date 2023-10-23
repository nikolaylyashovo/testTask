import React from 'react'
import { useDataContext } from '../../contexts/dataContext';
import './RefreshButton.scss';


export const RefreshButton = () => {
    const { handleRefresh } = useDataContext();
    return (
        <div>
            <button className='button_refresh' onClick={handleRefresh}>ОБНОВИТЬ</button>
        </div>
    )
}

