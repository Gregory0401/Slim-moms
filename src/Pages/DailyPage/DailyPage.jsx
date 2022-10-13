import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb, Wrapper } from './DailyPage.styled';
import { format, startOfToday } from 'date-fns';
import { Container } from 'components/Layout/Main/Main.styled';

const DailyPage = () => {
  let today = startOfToday();
  let date = format(today, 'yyyy-MM-dd');

  return (
    <Container>
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
    </Container>
  );
};

export default DailyPage;
