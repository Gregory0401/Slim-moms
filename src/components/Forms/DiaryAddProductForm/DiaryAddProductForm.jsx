import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  eatenProduct,
  userInfo,
} from '../../../Redux/ProductSearch/productsSearchOperations';
import { getSearchItems } from '../../../Redux/ProductSearch/productsSearchSelector';
// vova1@gmail.com
// qweqwe123@gmail.com
// petro-poroshenko@gmail.com
// vasylqwe@gmail.com

import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit';
import {
  LabelSearch,
  Wrrapen,
  StyledForm,
  StyledInput2,
} from './DiaryAddProductForm.styled.js';
import DebounceInput from 'react-debounce-input';
import Popup from 'components/Popup/Popup';

const DiaryAddProductForm = ({ date }) => {
  const dispatch = useDispatch();
  // =====
  useEffect(() => {
    dispatch(eatenProduct());
    dispatch(userInfo());
  }, [dispatch]);
  // =====

  const items = useSelector(getSearchItems);
  const [productId, setProductId] = useState('');

  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');

  const [click, setClick] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    !click && setShowPopup(true);
    if (title.length > 2) {
      dispatch(
        addProduct({
          title,
        })
      );
    }
  }, [click, dispatch, title]);

  function handleChange({ target: { name, value } }) {
    switch (name) {
      case 'title':
        setClick(false);
        setTitle(value);
        break;
      case 'weight':
        setWeight(value);
        break;

      default:
        break;
    }
  }

  const handleClick = ({ target: { textContent } }, id) => {
    setTitle(textContent);

    setProductId(id);
    setShowPopup(false);
    setClick(true);
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
    // dispatch(userInfo());
    setTitle('');
    setWeight('');
  };
  // console.log(showPopup);
  // console.log(items.length > 1);
  // console.log(title.length > 1);
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
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
          {showPopup && items.length > 1 && title.length > 1 && (
            <Popup data={items} onClick={handleClick} />
          )}
        </Wrrapen>
        <label>
          <StyledInput2
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
        <ButtonSubmit />
      </StyledForm>
    </>
  );
};

export default DiaryAddProductForm;
