import { useSelector, useDispatch } from 'react-redux';
import {
  getEatenProduct,
  getDayId,
} from '../../Redux/ProductSearch/productsSearchSelector';
import {
  deleteEatenProduct,
  dayInfo,
} from '../../Redux/ProductSearch/productsSearchOperations';
import { ButtonClose } from '../Buttons/ButtonClose/ButtonClose';

const ProductsList = () => {
  const eatenProd = useSelector(getEatenProduct);
  const dayId = useSelector(getDayId);
  const dispatch = useDispatch();

  const deleteProduct = id => {
    const deleteData = {
      dayId,
      eatenProductId: id,
    };

    const dateInfo = {
      date: '2022-10-09',
    };

    dispatch(deleteEatenProduct(deleteData));
    dispatch(dayInfo(dateInfo));
  };

  return (
    <>
      <ul>
        {eatenProd &&
          eatenProd.map(({ id, title, weight, kcal }) => {
            return (
              <li
                onClick={() => deleteProduct(id)}
                key={id}
                style={{ display: 'flex' }}
              >
                <p style={{ marginRight: 35 }}>{title}</p>
                <p style={{ marginRight: 35 }}>{Math.round(weight)}</p>
                <p style={{ marginRight: 35 }}>{Math.round(kcal)}</p>
                <ButtonClose />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ProductsList;
