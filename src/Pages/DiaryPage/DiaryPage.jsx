import DiaryProductsList from 'components/Diary/DiaryProductsList/DiaryProductsList';
import DiaryAddProductForm  from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateСalendar from 'components/Forms/DiaryDateСalendar';

const DairyPage = () => {
  return (
    <>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList/>
    </>
  );
};

export default DairyPage;
