import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  getDayId,
  getLoading,
  getError,
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
  const error = useSelector(getError);

  const multidimensionalArray = eatenProducts.flatMap(
    item => item.eatenProducts
  );

  console.log('eatenProducts', eatenProducts);

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
      )}
      {error && <p>{toast.error}</p>}
    </>
  );
};

export default ProductsList;
