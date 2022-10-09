import styled from 'styled-components';
import { breakpoints } from '../../Utils/size';
export const Wrapper = styled.div`
  background-color: #eff1f3;
  
  margin-left: auto;
  width: 100%;

  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  text-align: center;
  @media ${breakpoints.minTablet} {
    background-color: transparent;
  }
`;
export const Name = styled.p`
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  text-align: right;
  letter-spacing: 0.04em;

  color: #212121;
`;
export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Gotham Pro';
  border: none;
  border-left: 2px solid #e0e0e0;
  background-color: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  padding-left: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 32px;

  color: #9b9faa;
`;
