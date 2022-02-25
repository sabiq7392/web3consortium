import styled from 'styled-components';

export const screen = { 
  xs: 'min-width: 1px', sm: 'max-width: 767px', md: 'max-width: 991px', lg: 'max-width: 1199px', xl: 'max-width: 1399px', xxl: 'min-width: 1400px', 
};

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
  border: ${props => props.border ? '1px solid red' : ''};
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
`;
// export const GridCenter = styled.div({ display: 'grid', placeItems: 'center' });
// export const FlexCenter = styled.div({ display: 'flex', justifyContent: 'center', alignItems: 'center' });

const borderedBox = `
  min-height: 44;
  min-width: 44;
  border: 3px solid; 
  padding: 10px 20px; 
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`;

const borderedBoxBlack_hover = `
  ${borderedBox}:hover {
    background: rgba(0,0,0,1);
    color: white;
    border-color: black;
  }
`;

const borderedBoxWhite_hover = `
  ${borderedBox}:hover {
    background: rgba(255,255,255,0.2);
    border-color: white;
    color:white
  }
`;

export const AnchorBorderedWhite = styled.a`
  ${borderedBox}
  color: white;
  text-decoration: none;
  ${borderedBoxWhite_hover}
`;

export const AnchorBorderedBlack = styled.a`
  ${borderedBox}
  color: black;
  text-decoration: none;
  ${borderedBoxBlack_hover}
`;

export const BoxBorderedBlack = styled.div`
  ${borderedBox}
  color: black;
  ${borderedBoxBlack_hover}
`;

export const SectionBorder = styled.div({
  heigh: 1,
  width: '100%',
  background: '#C4C4C4',
});

export const Typhography = styled.p`
  border: ${props => props.border ? '1px solid red' : ''};
  text-align: ${props => props.align ? props.align : 'left'};
  line-height: ${props => props.lineHeight || 'normal'};
  color: ${props => props.color ? props.color : 'white'};
  font-weight: ${props => props.bold ? 'bold' : props.semibold ? '600' : '400'};
  ${props => {
    if (props.xSmall) return `
      font-size: 18px;
    `;

    if (props.small) return `
      font-size: 24px;
    `;

    if (props.medium) return `
      font-size: 36px;
      ${props.responsive === false ?  '' : `@media (${screen.md}) { font-size: 24px; }`}
    `;

    if (props.large) return `
      font-size: 48px;
      ${props.responsive === false ?  '' : `@media (${screen.md}) { font-size: 36px; }`}
    `;

    if (props.xLarge) return `
      font-size: 64px;
      ${props.responsive === false ?  '' : `@media (${screen.md}) { font-size: 48px; }`}
    `;

    if (props.xxLarge) return `
      font-size: 100px;
    `;

    if (props.xxxLarge) return `
      font-size: 288px;
      ${props.responsive === false ? '' : `@media(${screen.md}) { font-size: 144px }`}
    `;
  }}
`;