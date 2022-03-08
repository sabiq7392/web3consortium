import styled from 'styled-components';
import debug from '../config/debug.styled';

export const Grid = styled.div`
  display: grid;
  ${props => props.center ? `
    place-items: center;
  ` : props.vCenter ? `
    align-items: center;
  ` : props.hCenter ? `
    justify-content: center;
  ` : ''}
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap + 'px'};
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  ${debug}
`;

export const Flex = styled.div`
  display: flex;
  ${props => props.center ? `
    align-items: center;
    justify-content: center;
  ` : props.vCenter ? `
    align-items: center;
  ` : props.hCenter ? `
    justify-content: center;
  ` : ''}

  gap: ${props => props.gap + 'px'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  border: ${props => props.border ? '1px solid red' : ''};
  flex-direction: ${props => props.direction};
  ${debug}
`;
