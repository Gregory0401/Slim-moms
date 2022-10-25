import { useSelector, useDispatch } from 'react-redux';
import {
  getDayId,
  getLoading,
  getEatenProducts,
} from '../../Redux/userData/userDataSelector';
import {
  deleteEatenProduct,
  dayInfo,
} from '../../Redux/userData/userDataOperations';
import { ButtonClose } from '../Buttons/ButtonClose/ButtonClose';
import { Text, TextDiscription, List, Item } from './ProductList.styled.js';
import Loader from 'components/Loader';

const ProductsList = ({ date }) => {
  const dispatch = useDispatch();
  const eatenProducts = useSelector(getEatenProducts);
  const dayId = useSelector(getDayId);
  const isLoading = useSelector(getLoading);

  const deleteProduct = id => {
    const deleteData = {
      dayId,
      eatenProductId: id,
    };

    dispatch(deleteEatenProduct(deleteData));
    dispatch(dayInfo({ date }));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {eatenProducts?.map(({ id, title, weight, kcal }) => {
            return (
              <Item key={id} style={{ display: 'flex' }}>
                <Text>{title}</Text>
                <TextDiscription>
                  {Math.round(weight)}
                  {' г'}
                </TextDiscription>
                <TextDiscription>
                  {Math.round(kcal)}
                  {' ккал'}
                </TextDiscription>
                <ButtonClose onClose={() => deleteProduct(id)} />
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ProductsList;
