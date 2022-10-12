import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDateInfo from '../../Redux/dayData/';

const DailyPage = () => {
  const [date, setDate] = useState(new Date());
  const dayInfo = useSelector(getDayInfo);
  const dispatch = useDispatch();

  return (
    <>
      <DiaryDateCalendarDate date={date} />
      <DiaryAddProductForm />
      <ProductsList />
    </>
  );
};

export default DailyPage;
