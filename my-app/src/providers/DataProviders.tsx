import React, {ReactNode} from 'react'
import { useData } from '../hooks/useData';
import { dataContext } from '../contexts/dataContext';

interface IProps {
  children: ReactNode;
}

export const DataProviders: React.FC<IProps> = ({ children }) => {
  const {items, sortItems, setFilters, handleRefresh} = useData()

  return (
    <dataContext.Provider value={{ items, sortItems, setFilters,  handleRefresh}}>{children}</dataContext.Provider>
  )
}

