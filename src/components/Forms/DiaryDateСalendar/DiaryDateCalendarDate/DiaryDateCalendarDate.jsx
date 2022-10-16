import { CalendarIcon } from '@heroicons/react/24/solid';
import { format, startOfToday } from 'date-fns';
import { Wrapper } from './DiaryDateCalendarDate.styled';
import { StyledLink } from './DiaryDateCalendarDate.styled';
import { DateTitle } from './DiaryDateCalendarDate.styled';


const DiaryDateCalendarDate = ({ date }) => {

  return (
    <Wrapper>
      <StyledLink to="calendar">
        <DateTitle>{date}</DateTitle>
        <CalendarIcon className=" w-6 h-6 " aria-hidden="true" />
      </StyledLink>
    </Wrapper>
  );
};

export default DiaryDateCalendarDate;
