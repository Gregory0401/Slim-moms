import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb, Wrapper } from './DailyPage.styled';
import { format, startOfToday } from 'date-fns';

const DailyPage = () => {
  let today = startOfToday();
  let date = format(today, 'yyyy-MM-dd');

  return (
    <Thumb>
      <div>
        <DiaryDateCalendarDate />
        <Wrapper>
          <DiaryAddProductForm date={date} />
          <ProductsList date={date} />
        </Wrapper>
      </div>
      <SidebarWrap>
        <RightSideBar />
      </SidebarWrap>
    </Thumb>
  );
};

export default DailyPage;
