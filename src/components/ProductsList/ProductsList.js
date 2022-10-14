import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  // getEatenProducts,
  getDayId,
  // getUserId,
  // getUserDaySummary,
} from '../../Redux/ProductSearch/productsSearchSelector';
// =====
// import { selectUserId } from '../../Redux/Auth/authSelectors';
// =====
import {
  deleteEatenProduct,
  userInfo,
} from '../../Redux/ProductSearch/productsSearchOperations';
import { ButtonClose } from '../Buttons/ButtonClose/ButtonClose';
import { Text, TextDiscription, List, Item } from './ProductList.styled.js';

const ProductsList = ({ date, eatenProducts }) => {
  // const eatenProducts = useSelector(getEatenProducts);
  const dayId = useSelector(getDayId);
  console.log(eatenProducts);
  // console.log('eatenProducts', eatenProducts);
  // console.log('dayId ', dayId);
  // console.log('date ', date);

  // =====
  // const findDayByDate = eatenProducts.find(item => item.date === date);
  // console.log(findDayByDate);

  // const currentDayProducts = eatenProducts.filter(({ _id }) =>
  //   console.log(_id)
  // );
  // console.log(currentDayProducts);

  // const { data, refetch } = userInfo({ count: 5 });
  // useEffect(() => {
  //   dispatch(eatenProduct());
  // }, [dispatch]);

  // const userId = useSelector(getUserId);
  // console.log('userId from product', userId);
  // const userIdAuth = useSelector(selectUserId);
  // console.log('userIdAuth from auth', userIdAuth);
  // const userDaySummary = useSelector(getUserDaySummary);
  // console.log('userDaySummary: ', userDaySummary);
  //!!!
  // let userIdTEST = userIdAuth;
  // console.log('userIdTEST ', userIdTEST);

  // =====

  // =====
  // =====

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
    // dispatch(eatenProduct());
  };

  // if (userId === userIdAuth) {
  //   console.log('id совпадает');
  // } else {
  //   console.log('id НЕ СОВПАДАЕТ!!!!!!!!!!!!!');
  // }

  // const qwe = eatenProduct => {
  //   if (eatenProduct.length === 1) {
  //     console.log(88888, eatenProduct);
  //     return eatenProduct;
  //   } else {
  //     console.log(99999, eatenProduct[0].eatenProductucts);
  //     return eatenProduct[0].eatenProductucts;
  //   }
  // };
  // console.log(qwe(eatenProduct));
  // [0].eatenProducts
  return (
    <>
      <List>
        {eatenProducts.map(({ id, title, weight, kcal }) => {
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
