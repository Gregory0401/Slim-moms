import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getDayId,
  getLoading,
} from '../../Redux/ProductSearch/productsSearchSelector';
import {
  deleteEatenProduct,
  userInfo,
} from '../../Redux/ProductSearch/productsSearchOperations';
import { ButtonClose } from '../Buttons/ButtonClose/ButtonClose';
import { Text, TextDiscription, List, Item } from './ProductList.styled.js';
import Loader from 'components/Loader';

const ProductsList = ({ eatenProducts }) => {
  const dayId = useSelector(getDayId);
  const isLoading = useSelector(getLoading);

  const multidimensionalArray = eatenProducts.flatMap(
    item => item.eatenProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfo());
  }, [dispatch]);

  const deleteProduct = id => {
    const deleteData = {
      dayId,
      eatenProductId: id,
    };

    dispatch(userInfo());
    dispatch(deleteEatenProduct(deleteData));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {multidimensionalArray.map(({ id, title, weight, kcal }) => {
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
