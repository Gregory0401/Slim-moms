import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  eatenProduct,
} from '../../../Redux/ProductSearch/productsSearchOperations';
import {
  getDaySummary,
  // getEatenProduct,
  getSearchItems,
} from '../../../Redux/ProductSearch/productsSearchSelector';
// vova1@gmail.com

import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit';
import {
  FormDiary,
  WrrapenSearch,
  LabelSearch,
  Wrrapen,
} from './DiaryAddProductForm.styled.js';

const DiaryAddProductForm = () => {
  //
  const daySummary = useSelector(getDaySummary);
  // const eatenProd = useSelector(getEatenProduct);
  //
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
      date: '2022-10-09',
      productId,
      weight,
    };
    // console.log(eatenProd);
    dispatch(eatenProduct(eatenDate));
    dispatch(addProduct(newProduct));
    setTitle('');
    setWeight('');
  };

  return (
    <>
      <FormDiary onSubmit={handleSubmit}>
        <Wrrapen>
          <LabelSearch>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Введите название продукта"
              onInput={handleChange}
            />
          </LabelSearch>
          <WrrapenSearch>
            {items.length > 1 &&
              items.map(item => {
                return (
                  <div key={item._id}>
                    <p onClick={handleClick}>{item.title?.ru}</p>
                  </div>
                );
              })}
          </WrrapenSearch>
        </Wrrapen>
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

      {/* Добавив RightSideBar для теста, "НЕ ОБЕССУДЬТЕ"!!!!! */}
      {daySummary && (
        <div>
          <h2>Сводка на {daySummary.date}</h2>
          <div>
            {Number(daySummary.dailyRate) > Number(daySummary.kcalConsumed) ? (
              <p>
                Осталось
                {Math.round(
                  Number(daySummary.dailyRate) - Number(daySummary.kcalConsumed)
                )}
                ккал
              </p>
            ) : (
              <p>Осталось 0 ккал</p>
            )}
            <p>Употреблено {Math.round(daySummary.kcalConsumed)} ккал</p>
            <p>Дневная норма {Math.round(daySummary.dailyRate)} ккал</p>
            <p>
              Процент от нормы {Math.round(daySummary.percentsOfDailyRate)} %
            </p>
          </div>
          <br />
          <br />
          <div>
            <h2>Нерекомендуемые продукты</h2>
            <p>Здесь будет отображаться Ваш рацион</p>
          </div>
        </div>
      )}
      {/* Добавив RightSideBar для теста, "НЕ ОБЕССУДЬТЕ"!!!!! */}

      {/* Добавив ProductList для теста, "НЕ ОБЕССУДЬТЕ"!!!!! */}
      {/* <ul style={{ marginTop: 35 }}>
        {eatenProd?.map(({ id, title, weight, kcal }) => {
          return (
            <li key={id} style={{ display: 'flex' }}>
              <p style={{ marginRight: 35 }}>{title}</p>
              <p style={{ marginRight: 35 }}>{Math.round(weight)}</p>
              <p style={{ marginRight: 35 }}>{Math.round(kcal)}</p>
              <button>Удалить</button>
            </li>
          );
        })}
      </ul> */}
      {/* Добавив ProductList для теста, "НЕ ОБЕССУДЬТЕ"!!!!! */}
    </>
  );
};

export default DiaryAddProductForm;
