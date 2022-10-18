import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'Utils/size';
export const Wrapper = styled.nav`
  display: flex;
  @media ${breakpoints.onlyTablet} {
    margin-left: auto;
  }
  @media ${breakpoints.desktop} {
    border-left: 2px solid ${p => p.theme.colors.border};
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.heading};
  /* padding-left: 20px; */
  padding-left: ${p => p.theme.space[4] + 4}px;
  height: 32px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  text-transform: ${p => p.theme.textTransform.upperCase};
  line-height: 13px;

  color: ${p => p.theme.colors.secondaryTextColor};
  &.active {
    ${p => p.theme.colors.primary_text_color};
  }
`;
