import styled from 'styled-components';

const screen = {
  lg: 'min-width: 992px',
}

export const HeroContainer = styled.section`
  display: grid;
  place-items: center;
  background: url('/images/bg/bg_hero.png');
  background-size: 100% 100%;
  @media (${screen.lg}) {
    height: 100vh!important;
  }
`;

export const AnchorWithIcons = styled.a`
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  svg {
    transition: 200ms;
  }
  :hover {
    svg {
      transform: translateX(20px);
    }
  }
`;
