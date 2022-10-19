import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../Utils/size';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${p => p.theme.fonts.heading};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 13px;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  text-transform: uppercase;
  height: 32px;

  color: var(--secondary-text-color);

  text-decoration: none;
  &.active {
    color: red;
  }
`;
export const StyledLogo = styled(NavLink)`
  text-decoration: none;
`;

export const Menu = styled.div`
  display: none;

  @media ${breakpoints.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid ${p => p.theme.colors.primary_text_color};
    padding-left: ${p => p.theme.space[4] + 4}px;
    margin-left: ${p => p.theme.space[4] + 4}px;
    gap: 16px;
  }
`;

export const Burger = styled.div`
  @media ${breakpoints.desktop} {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  /* gap: 20px; */
`;
