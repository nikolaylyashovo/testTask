import React from 'react';
import {useDataContext} from "../../../../contexts/dataContext";
import {ContentItem} from "../contentItem/ContentItem";


export const ContentList: React.FC = () => {
    const {items} = useDataContext();
    return (
        <>
            {items.map((item) =>
                <ContentItem {...item} key={item.id} />
            )}
        </>
    );
};
