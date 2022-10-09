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
    // console.log(newProduct);

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
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add product</button>
      </form>
      {/* Добавив RightSideBar для теста, "НЕ ОБЕССУДЬТЕ"!!!!! */}
      {/* <div>
        <h2>Сводка на {date}</h2>
        <div>
          <p>Осталось {Math.round(kcalLeft)} ккал</p>
          <p>Употреблено {Math.round(kcalConsumed)} ккал</p>
          <p>Дневная норма {Math.round(dailyRate)} ккал</p>
          <p>Процент от нормы {Math.round(percentsOfDailyRate)} %</p>
        </div>
        <br />
        <br />
        <div>
          <h2>Нерекомендуемые продукты</h2>
          <p>Здесь будет отображаться Ваш рацион</p>
        </div>
      </div> */}
      {/* Добавив RightSideBar для теста, "НЕ ОБЕССУДЬТЕ"!!!!! */}

      {/* Добавив ProductList для теста, "НЕ ОБЕССУДЬТЕ"!!!!! */}
      {/* <ul style={{ marginTop: 35 }}>
        {qwe.map(({ id, title, weight, kcal }) => {
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
