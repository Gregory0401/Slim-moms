import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from 'components/Forms/DiaryDateСalendar';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';

const DailyPage = () => {
  return (
    <>
      <DiaryDateCalendarDate />
      {/* <DiaryDateCalendar /> */}
      <DiaryAddProductForm />
      <ProductsList />
    </>
  );
};

export default DailyPage;
