import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from 'Redux/ProductSearch/productsSearchOperations';
import { getProduct } from 'Redux/ProductSearch/productsSearchSelector';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
} from './DiaryAddProductForm.styled';

// vova1@gmail.com

const DiaryAddProductForm = () => {
  const [searchProductRes, setSearchProductRes] = useState('');
  const product = useSelector(getProduct);
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearchProductRes(e.currentTarget.elements.title.value);
    if (searchProductRes.trim().length > 1) {
      dispatch(productSearch(searchProductRes));
    }
  };

  return (
    <>
      <StyledForm onChange={handleChange} autoComplete="off">
        <div>
          <StyledLabel htmlFor="title">Введите название продукта</StyledLabel>
          <StyledInput
            id="title"
            type="text"
            name="title"
            autoComplete="off"
            placeholder="выберите ваш продукт"
          />
        </div>
        
        <div>
          <StyledLabel htmlFor="weight">Граммы</StyledLabel>
          <StyledInput
            id="weight"
            type="number"
            name="weight"
            autoComplete="off"
            placeholder="введите вес"
          />
        </div>
        <ButtonSubmit />
      </StyledForm>
      {product.length > 0 && (
        <select>
          <option disabled>Пожалуйста выберите продукт</option>
          {product.map(({ title, id }) => (
            <option title={title.ru} key={id} value={id}>
              {title.ru}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default DiaryAddProductForm;
