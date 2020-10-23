import React from 'react';

function ListItem(props) {
  const { image, fileName } = props;

  return (
    <div className="item-wrapper">
      <div className="image">
        <img className='thumb' src={image} alt="Some alt text" />
        <img className='fade' src={image} alt="Some alt text" />
      </div>
      <span className="file-name">{ fileName }</span>
    </div>
  )
};

export default ListItem;
