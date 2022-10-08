import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateСalendar from 'components/Forms/DiaryDateСalendar';

const DailyPage = () => {
  return (
    <>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      {/* <DiaryProductsList /> */}
    </>
  );
};

export default DailyPage;
