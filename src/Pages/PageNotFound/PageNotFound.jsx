import React from 'react';
import { StyledImage, Div, StyledLink } from './PageNotFound.styled';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export const PageNotFound = () => {
  return (
    <>
      <StyledImage>
        <Div>
          <StyledLink to={`/diary`}>
            <ChevronLeftIcon className=" w-14 h-14 " aria-hidden="true" />
            Назад
          </StyledLink>
        </Div>
      </StyledImage>
    </>
  );
};
