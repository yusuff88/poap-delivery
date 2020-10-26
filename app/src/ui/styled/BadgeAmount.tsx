import styled from '@emotion/styled';

export default styled.div`
  background: ${({ theme }) => theme.colors['primaryColor']};
  width: 35px;
  height: 35px;
  line-height: 35px;
  color: white;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 5px;
`;
