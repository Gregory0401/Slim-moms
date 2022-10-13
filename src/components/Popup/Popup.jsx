import React from 'react';
import { PopupWrapper, PopupText } from './Popup.styled.js';

function Popup({ data, onClick }) {
  return (
    <PopupWrapper>
      {data.map(item => {
        return (
          <div key={item._id}>
            <PopupText onClick={onClick}>{item.title?.ru}</PopupText>
          </div>
        );
      })}
    </PopupWrapper>
  );
}

export default Popup;
