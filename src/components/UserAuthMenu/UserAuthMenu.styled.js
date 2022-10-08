import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  background-color: #fff;
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
