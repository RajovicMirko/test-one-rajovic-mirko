import './List.scss';
import React, { useEffect, useState } from 'react';
import Item from './Item';

function List(props) {
  const [ activeId, setActiveId ] = useState("");
  const { data, addScrollEvent, onListItemClick } = props;

  useEffect(() => addScrollEvent())
  
  const removeActiveFromElement = () => {
    if(!activeId) return;
    const el = document.querySelector(`#${activeId}`);
    el.classList.remove('active');
  }

  const addActiveToElement = (id) => {
    const el = document.querySelector(id);
    if(el){
      el.classList.add('active');
      setActiveId(el.id);
    }
  }

  const handleItemClick = (liId) => {
    removeActiveFromElement();
    addActiveToElement(`#li-${liId}`);
    onListItemClick();
  }

  return (
    <div className="list">
      <ul>
        { data && data.map((item, i) =>
            <li key={i} id={`li-${i}`}  onClick={() => handleItemClick(i)}>
              <Item
                image={item.owner.avatar_url}
                fileName={Object.keys(item.files)[0]}
              />
            </li>
        )}
      </ul>
    </div>
  )
}

export default List
