import DiaryAddProductForm from '../DiaryAddProductForm/DiaryAddProductForm'
import {ButtonReturn} from '../../Buttons/ButtonReturn/ButtonReturn'
import { format, startOfToday } from 'date-fns';
import {Modal, BtnClose} from './MobileForm.styled';


export const Form = ({onClose}) => {
    let today = startOfToday();
    let date = format(today, 'yyyy-MM-dd');



const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
    
    
    return (
        <>
        
        <Modal onClick={handleBackdropClick}> <DiaryAddProductForm date={date} onClose={onClose}/>
        <BtnClose><ButtonReturn onClose={onClose}></ButtonReturn></BtnClose>
        </Modal>
       
       
        </>
    );
  };