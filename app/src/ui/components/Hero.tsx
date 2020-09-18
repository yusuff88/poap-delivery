import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme, Box, Icon } from '@chakra-ui/core';

// Assets
import Berlin from 'assets/images/cities/c1.png';
import BuenosAires from 'assets/images/cities/c2.png';
import SanFrancisco from 'assets/images/cities/c3.png';
import Gibraltar from 'assets/images/cities/c4.png';
import London from 'assets/images/cities/c5.png';
import Moscow from 'assets/images/cities/c6.png';
import Paris from 'assets/images/cities/c7.png';
import Pittsburg from 'assets/images/cities/c8.png';
import Rio from 'assets/images/cities/c9.png';
import Shangai from 'assets/images/cities/c10.png';
import Sydney from 'assets/images/cities/c11.png';
import Toronto from 'assets/images/cities/c12.png';

// Styled component
const Background = styled.img<{ theme: ITheme }>`
  position: absolute;
  z-index: -1;
  width: 100%;
  opacity: 0.6;
  top: 25%;

  @media (min-width: ${({ theme }) => theme.breakpoints['md']}) {
    top: 0;
    opacity: 1;
    &.c1,
    &.c8,
    &.c2,
    &.c9,
    &.c10 {
      top: -120px;
    }
    &.c4,
    &.c3,
    &.c12 {
      top: -20px;
    }
    &.c5,
    &.c11 {
      top: -170px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints['xxl']}) {
    &.c12,
    &.c2,
    &.c3 {
      top: -160px;
    }
  }
`;
const IconHolder = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(50% - 16px);
  animation: MoveUpDown 1.5s ease-in-out infinite;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
  }
`;

const Hero: FC = () => {
  const backgrounds = [
    { image: Berlin, className: 'c1' },
    { image: BuenosAires, className: 'c2' },
    { image: SanFrancisco, className: 'c3' },
    { image: Gibraltar, className: 'c4' },
    { image: London, className: 'c5' },
    { image: Moscow, className: 'c5' },
    { image: Paris, className: 'c5' },
    { image: Pittsburg, className: 'c8' },
    { image: Rio, className: 'c9' },
    { image: Shangai, className: 'c10' },
    { image: Sydney, className: 'c11' },
    { image: Toronto, className: 'c12' },
  ];
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const theme = useTheme();
  return (
    <Box w={'100%'} h={'calc(100vh - 90px)'} pt={'25px'} pos={'relative'}>
      <Box textAlign={'center'} pt={'100px'}>
        <Box
          as={'h1'}
          color={theme.colors['primaryColor']}
          fontSize={'40px'}
          lineHeight={'44px'}
          fontWeight={'bold'}
          m={'0 0 0.5em'}
        >
          POAP Delivery
        </Box>
      </Box>
      <Background
        theme={theme}
        alt={'POAP Delivery'}
        src={background.image}
        className={background.className}
      />
      <IconHolder>
        <Icon name={'chevron-down'} size="32px" color={theme.colors['primaryColor']} />
      </IconHolder>
    </Box>
  );
};

export default Hero;
