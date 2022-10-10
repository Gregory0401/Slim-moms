import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  eatenProduct,
} from '../../../Redux/ProductSearch/productsSearchOperations';
import {
  getProductId,
  // getDaySummary,
  // getEatenProduct,
} from '../../../Redux/ProductSearch/productsSearchSelector';
// vova1@gmail.com
console.log('asdasd');

import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit';
import { FormDiary } from './DiaryAddProductForm.styled.js';

const DiaryAddProductForm = () => {
  //
  // const daySummary = useSelector(getDaySummary);
  // const qwe = useSelector(getEatenProduct);
  //
  const dispatch = useDispatch();
  const productId = useSelector(getProductId);

  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'title' ? setTitle(value) : setWeight(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newProduct = {
      title,
      weight,
      productId,
    };
    console.log(newProduct);

    const eatenProd = {
      date: '2022-10-09',
      productId,
      weight,
    };
    // console.log(eatenProd);

    dispatch(addProduct(newProduct));
    dispatch(eatenProduct(eatenProd));

    setTitle('');
    setWeight('');
    // console.log(productId);
  };
  // const { date, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
  //   daySummary;

  return (
    <>
      <FormDiary onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Введите название продукта"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="number"
            name="weight"
            value={weight}
            placeholder="Граммы"
            onChange={handleChange}
          />
        </label>
        <ButtonSubmit />
      </FormDiary>
    </>
  );
};

export default DiaryAddProductForm;
