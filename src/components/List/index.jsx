import React, { useState } from 'react';
import './List.css';
import ListItem from '../ListItem';


const List = ({ items }) => {
    const [selected, setSelected] = useState([]);

    const handleSelect = (item) => {
        let tempSelected = selected.slice();

        if (tempSelected.length > 0) {
            if (tempSelected.includes(item)) {
                tempSelected = tempSelected.filter(current => item !== current);
            } else {
                tempSelected.push(item);
            }
        } else {
            tempSelected.push(item);
        }
        setSelected(tempSelected);
    };

    const isSelected = (item) => selected.includes(item.name);

    return items.length > 0 && items.map(item => (
        <div className={`${isSelected(item) ? 'active' : 'not-active'}`} >
            <ListItem item={item} key={item.name} />
            <button onClick={() => handleSelect(item.name)}>Select and toggle parent color</button>
        </div>
    ));
}

export default List;