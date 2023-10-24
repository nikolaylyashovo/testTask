import React, { useContext } from "react";
import { IItem } from "../api";
import {TypeSort} from "../hooks/useData";

export interface IFilters {
    isAll: boolean, 
    isNotOwners: boolean, 
    isOneOwner: boolean,  
    isSomeOwners: boolean, 
}
export interface IDataContext {
    items: IItem[]
    sortItems?: (sortType:TypeSort) => void
    setFilters?: any
    handleRefresh?: () => void
}

export const dataContext = React.createContext<IDataContext>({
    items: [],
})

export const useDataContext= ():IDataContext  => useContext(dataContext)
