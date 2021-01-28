import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme } from '@chakra-ui/core';

// Assets
import BuiltOnEthereum from 'assets/images/built-on-ethereum.png';

// Styled Components
const BuiltContainer = styled.div<{ theme: ITheme }>`
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.gray.eth};
  img {
    height: 30px;
    margin: 0 auto;
  }
`;

const BuiltWith: FC = () => {
  const theme = useTheme();
  return (
    <BuiltContainer theme={theme}>
      <img src={BuiltOnEthereum} alt={'Built on Ethereum'} />
    </BuiltContainer>
  );
};

export default BuiltWith;
