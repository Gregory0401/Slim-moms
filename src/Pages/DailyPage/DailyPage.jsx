import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb, Wrapper, Container} from './DailyPage.styled';
import { format, startOfToday } from 'date-fns';
import {Mobile} from '../../components/Forms/DiaryAddProductForm/DiaryAddProductForm.styled'
import { useState } from 'react';
import  {ButtonSubmit}  from '../../components/Buttons/ButtonSubmit/ButtonSubmit';
import {Form} from '../../components/Forms/DiaryAddProductForm/MobileForm'


const DailyPage = () => {
  let today = startOfToday();
  let date = format(today, 'yyyy-MM-dd');

  
  
    const [showModal, setShowModal] = useState(false);
    const onToggleModal = () => {
      setShowModal(prevState => !prevState);
  };

  return (
    <Thumb>
      <div>
        <DiaryDateCalendarDate />
        <Wrapper>
        <Container><DiaryAddProductForm date={date} onClose={onToggleModal}/></Container> 
          
          <Mobile><ButtonSubmit onClick={onToggleModal}/></Mobile>
          {showModal && <Form onClose={onToggleModal}/>}
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
