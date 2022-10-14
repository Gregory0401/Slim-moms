import DiaryAddProductForm from 'components/Forms/DiaryAddProductForm/DiaryAddProductForm';
import ProductsList from '../../components/ProductsList/ProductsList';
import DiaryDateCalendarDate from 'components/Forms/DiaryDateСalendar/DiaryDateCalendarDate/DiaryDateCalendarDate';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import { SidebarWrap, Thumb, Wrapper, Container} from './DailyPage.styled';
import { format, startOfToday } from 'date-fns';

import { motion } from 'framer-motion';

import {Mobile  } from '../../components/Forms/DiaryAddProductForm/DiaryAddProductForm.styled'
import { useState } from 'react';
import  {ButtonOpen}  from '../../components/Buttons/ButtonOpen/ButtonOpen';
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
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Div>


    <>

      <Thumb>
        <div>

          <DiaryDateCalendarDate />
          <Wrapper>

            <Container><DiaryAddProductForm date={date} onClose={onToggleModal}/></Container> 
          
          <Mobile><ButtonOpen onClick={onToggleModal}/></Mobile>
          {showModal && <Form onClose={onToggleModal}/>}
            <ProductsList date={date} />
          </Wrapper>

        </Div>
      </motion.div>
      <motion.div
        as={motion.h2}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <SidebarWrap>
          <RightSideBar />
        </SidebarWrap>
      </motion.div>
    </Thumb>

        </div> 

        <SidebarWrap>
          <RightSideBar />
        </SidebarWrap>
      </Thumb>

    </>


  );
};

export default DailyPage;
