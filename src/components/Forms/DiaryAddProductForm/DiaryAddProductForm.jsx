import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  eatenProduct,
} from '../../../Redux/ProductSearch/productsSearchOperations';
import { getSearchItems } from '../../../Redux/ProductSearch/productsSearchSelector';
import {ButtonMain} from '../../Buttons/ButtonMain/ButtonMain'

import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit';
import {
  LabelSearch,
  Wrrapen,
  StyledForm,
  Button,
  ButtonModal,
  ButtonMod,
  ButtonClose
} from './DiaryAddProductForm.styled.js';
import DebounceInput from 'react-debounce-input';



const DiaryAddProductForm = ({ date, onClose }) => {
  const dispatch = useDispatch();

  const items = useSelector(getSearchItems);
  const productId = items[0]?._id;

  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');

  



  useEffect(() => {
    if (title.length > 2) {
      dispatch(
        addProduct({
          title,
        })
      );
    }
  }, [dispatch, title]);

  function handleChange({ target: { name, value } }) {
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'weight':
        setWeight(value);
        break;

      default:
        break;
    }
  }

  const handleClick = ({ target: { textContent } }) => {
    setTitle(textContent);
  };



  const handleSubmit = event => {
    event.preventDefault();
   
    const newProduct = {
      title,
      weight,
    };

    const eatenDate = {
      date,
      productId,
      weight,
    };

    dispatch(eatenProduct(eatenDate));
    dispatch(addProduct(newProduct));
    setTitle('');
    setWeight('');
    onClose(); 
  };  


  return (
    <>
    
      <StyledForm onSubmit={handleSubmit} >
        <Wrrapen>
          <LabelSearch>
            <DebounceInput
              type="text"
              name="title"
              value={title}
              placeholder="Введите название продукта"
              debounceTimeout={300}
              onChange={handleChange}
              style={{
                width: 240,
                outline: 'none',
                paddingBottom: 20,
                borderBottom: '1px solid #E0E0E0',
              }}
            />
          </LabelSearch>
          <div>
            {items.length > 1 && title.length > 2
              ? items.map(item => {
                  return (
                    <div key={item._id}>
                      <p onClick={handleClick}>{item.title?.ru}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </Wrrapen>
        <label>
          <input
            type="number"
            name="weight"
            value={weight}
            placeholder="Граммы"
            onChange={handleChange}
            style={{
              width: 105,
              outline: 'none',
              paddingBottom: 20,
              borderBottom: '1px solid #E0E0E0',
              marginRight: 60,
              textAlign: 'right',
            }}
          />
        </label>
        <Button><ButtonSubmit /></Button>
        <ButtonMod type="submit" >Добавить</ButtonMod>
        
      </StyledForm>
      
      
      
    </>
  );
};

export default DiaryAddProductForm;
