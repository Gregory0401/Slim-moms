import { useSelector } from 'react-redux';
import { getEatenProduct } from '../../Redux/ProductSearch/productsSearchSelector';

const ProductsList = () => {
  const eatenProduct = useSelector(getEatenProduct);

  return (
    <>
      <ul>
        {eatenProduct.map(({ id, title, weight, kcal }) => {
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{Math.round(weight)}</p>
              <p>{Math.round(kcal)}</p>
              <button>Удалить</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsList;
