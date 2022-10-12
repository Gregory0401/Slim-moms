import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';

const DailyPage = () => {
  return (
    <>
      <DiaryDateCalendarDate />
      <DiaryAddProductForm />
      <ProductsList />
     
    </>
  );
};

export default DailyPage;
