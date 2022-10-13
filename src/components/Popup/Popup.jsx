import React from 'react';
import { PopupWrapper, PopupText } from './Popup.styled.js';

function Popup({ data, onClick }) {
  return (
    <PopupWrapper>
      {data.map(item => {
        return (
          <div key={item._id}>
            <PopupText onClick={e => onClick(e, item._id)}>
              {item.title?.ru}
            </PopupText>
          </div>
        );
      })}
    </PopupWrapper>
  );
}

export default Popup;
