import { useEffect, useRef, useState } from "react";
import { api } from "../api";
import { IItem } from "../api";

export enum TypeSort {
    NEW = "new",
    CHEAP = "cheap"
}

type FilterType = 'isNotOwners' | 'isOneOwner' | 'isSomeOwners' | 'isAll'

export const useData = () => {
    const [items, setItems] = useState<IItem[]>([]);

    const filters = useRef<Record<FilterType, boolean>>({ isNotOwners: false, isSomeOwners: false, isOneOwner: false, isAll: false });
    const sortType = useRef<TypeSort>(TypeSort.NEW);
    const refItems = useRef<IItem[]>([]);

    const getTypeSort = (typeSort: TypeSort) => {
        const sortingMethods: Record<TypeSort, (a: IItem, b: IItem) => number> = {
            new: (a: IItem, b: IItem) => b.dateCreated.getTime() - a.dateCreated.getTime(),
            cheap: (a: IItem, b: IItem) => a.price - b.price
        }
        return sortingMethods[typeSort]
    }

    const getFilter = (currentFilter: FilterType) => {
        if (currentFilter === 'isAll') {
            return
        }
        const filtersMethods = {
            'isNotOwners': (item: IItem) => item.owners.length === 0,
            'isOneOwner': (item: IItem) => item.owners.length === 1,
            'isSomeOwners': (item: IItem) => item.owners.length > 1,
        }
        return filtersMethods[currentFilter]
    }

    const setTypeSort = (type: TypeSort) => {
        sortType.current = type
    }

    useEffect(() => {
        api.getItems().then((items) => {
            setItems(items.sort(getTypeSort(sortType.current)))
            refItems.current = items
        })
    }, [])


    const setFilters = (currentFilters: Record<FilterType, boolean>) => {
        filters.current = { ...filters.current, ...currentFilters }
    }


    const handleRefresh = () => {
        const typeSort = getTypeSort(sortType.current)
        const entries = Object.entries(filters.current)

        const isNotFilters = entries.filter(([_, value]) => Boolean(value)).length === 0

        if (filters.current['isAll'] || isNotFilters) {
            const result = [...refItems.current].sort(typeSort)

            setItems(result)
            return;
        }

        const result = entries.map(([key, value]) => {

            const filterFunc = getFilter(key as FilterType);

            if (!value || !filterFunc) {
                return [];
            }

            return refItems.current.filter(filterFunc)
        }).flat()

        setItems(result.sort(typeSort))
    }

    return { items, sortItems: setTypeSort, setFilters, handleRefresh }
}
