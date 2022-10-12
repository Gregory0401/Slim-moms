import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb } from './DailyPage.styled';

const DailyPage = () => {
  return (
    <Thumb>
      <DiaryDateCalendarDate />
      <DiaryAddProductForm />
      <ProductsList />
      <SidebarWrap>
        <RightSideBar />
      </SidebarWrap>
    </Thumb>
  );
};

export default DailyPage;
