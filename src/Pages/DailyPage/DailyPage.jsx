import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateСalendar from 'components/Forms/DiaryDateСalendar';
import ProductsList from '../../components/ProductsList/ProductsList';

const DailyPage = () => {
  return (
    <>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <ProductsList />
    </>
  );
};

export default DailyPage;
