import { useSelector, useDispatch } from 'react-redux';
import {
  getEatenProduct,
  getDayId,
} from '../../Redux/ProductSearch/productsSearchSelector';
import { deleteEatenProduct } from '../../Redux/ProductSearch/productsSearchOperations';

const ProductsList = () => {
  const eatenProduct = useSelector(getEatenProduct);
  const dayId = useSelector(getDayId);
  const dispatch = useDispatch();
  
  const deleteProduct = id => {
    const deleteData = {
      dayId,
      eatenProductId: id,
    };
    dispatch(deleteEatenProduct(deleteData));
  };

  return (
    <>
      <ul>
        {eatenProduct &&
          eatenProduct.map(({ id, title, weight, kcal }) => {
            return (
              <li key={id} style={{ display: 'flex' }}>
                <p style={{ marginRight: 35 }}>{title}</p>
                <p style={{ marginRight: 35 }}>{Math.round(weight)}</p>
                <p style={{ marginRight: 35 }}>{Math.round(kcal)}</p>
                <button type="button" onClick={() => deleteProduct(id)}>
                  Удалить
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ProductsList;
