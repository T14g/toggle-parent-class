import React from 'react';

const ListItem = ({ item }) => {
    return (
        <div>
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
        </div>
    );
}

export default ListItem;