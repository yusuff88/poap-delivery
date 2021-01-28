import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme, ITheme } from '@chakra-ui/core';

// Styled Components
const AboutContainer = styled.div<{ theme: ITheme }>`
  grid-area: 1 / 1 / 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    grid-area: 1 / 2 / 2 / 3;
    align-items: flex-start;
  }
  h5 {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: var(--alt-font);
    font-size: 16px;
    margin: 0 0 15px;
  }
  .about-list {
    list-style: none;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints['md']}) {
      max-width: 400px;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, 1fr);
      column-gap: 48px;
      row-gap: 5px;
      padding: 0;
      margin: 0;
    }
    li {
      width: max-content;
      @media (max-width: ${({ theme }) => theme.breakpoints['md']}) {
        padding: 0 30px;
        margin: 5px 0;
      }
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray.font};
      &:hover {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
`;

const About: FC = () => {
  const theme = useTheme();
  return (
    <AboutContainer theme={theme}>
      <h5>POAP Ecosystem</h5>
      <ul className="about-list">
        <li>
          <a
            href="https://www.poap.xyz/"
            className="text-subtitle2"
            target="_blank"
            rel="noreferrer"
          >
            poap.xyz
          </a>
        </li>
        <li>
          <a href="https://poap.fun/" className="text-subtitle2" target="_blank" rel="noreferrer">
            poap.fun
          </a>
        </li>
        <li>
          <a href="https://poap.chat/" className="text-subtitle2" target="_blank" rel="noreferrer">
            poap.chat
          </a>
        </li>
        <li>
          <a
            href="https://poap.gallery/"
            className="text-subtitle2"
            target="_blank"
            rel="noreferrer"
          >
            poap.gallery
          </a>
        </li>
        <li>
          <a
            href="https://poap.delivery/"
            className="text-subtitle2"
            target="_blank"
            rel="noreferrer"
          >
            poap.delivery
          </a>
        </li>
        <li>
          <a
            href="https://www.poap.xyz/"
            className="text-subtitle2"
            target="_blank"
            rel="noreferrer"
          >
            POAP App
          </a>
        </li>
      </ul>
    </AboutContainer>
  );
};

export default About;
