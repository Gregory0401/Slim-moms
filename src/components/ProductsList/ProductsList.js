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
import { Text, TextDiscription, List, Item } from './ProductList.styled.js';

const ProductsList = ({ date }) => {
  const eatenProd = useSelector(getEatenProduct);
  const dayId = useSelector(getDayId);
  const dispatch = useDispatch();

  const deleteProduct = id => {
    const deleteData = {
      dayId,
      eatenProductId: id,
    };

    const dateInfo = {
      date,
    };

    dispatch(deleteEatenProduct(deleteData));
    dispatch(dayInfo(dateInfo));
  };

  return (
    <>
      <List>
        {eatenProd &&
          eatenProd.map(({ id, title, weight, kcal }) => {
            return (
              <Item
                onClick={() => deleteProduct(id)}
                key={id}
                style={{ display: 'flex' }}
              >
                <Text>{title}</Text>
                <TextDiscription>
                  {Math.round(weight)}
                  {' г'}
                </TextDiscription>
                <TextDiscription>
                  {Math.round(kcal)}
                  {' ккал'}
                </TextDiscription>
                <ButtonClose />
              </Item>
            );
          })}
      </List>
    </>
  );
};

export default ProductsList;
