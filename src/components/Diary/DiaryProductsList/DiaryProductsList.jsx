import DiaryProductsListItem from '../DiaryProductsListItem';
import { ListWrapper } from './DiaryProductsList.styled.js';

const products = [
  { title: 'bread', weight: 100, calories: 210, id: 1 },
  {
    title: 'bread',
    weight: 100,
    calories: 210,
    id: 1,
  },
  { title: 'bread', weight: 100, calories: 210, id: 1 },
  {
    title: 'meat',
    weight: 240,
    calories: 310,
    id: 2,
  },
];

const DiaryProductsList = () => {
  const { title, weight, calories, id } = products[0];
  return (
    <ListWrapper>
      <DiaryProductsListItem
        id={id}
        weight={weight}
        calories={calories}
        title={title}
      />
    </ListWrapper>
  );
};

export default DiaryProductsList;
