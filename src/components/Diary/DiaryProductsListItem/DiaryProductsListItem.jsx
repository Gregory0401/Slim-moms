// import Container from '../../Container/Container'
import { Menu, Transition } from '@headlessui/react';
import {
  StyledTitle,
  StyledSecondaryTitle,
  StyledItem
} from './DiaryProductsListItem.styled';


import { XMarkIcon } from '@heroicons/react/24/outline'


const DiaryProductsListItem = ({ id, title, calories, weight }) => {
  return (
//    <Container>
          <StyledItem key={id}>
        <StyledTitle>{title}</StyledTitle>
        <StyledSecondaryTitle>{weight}</StyledSecondaryTitle>
        <StyledSecondaryTitle>{calories}</StyledSecondaryTitle>
        <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <XMarkIcon className="w-6 h-6"/>
          </Menu.Button>
        </div>
      </Menu>
      </StyledItem>
      
//    </Container>
  );
};

export default DiaryProductsListItem;
