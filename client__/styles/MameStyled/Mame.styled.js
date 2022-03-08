/**
 * @example when using attribute "css" in components
 * <Div css={'background: red; color: white;'}></Div>
 * <Div css={{ 
 *  default: 'background: red;', 
 *  lg: 'background: blue;', 
 *  hover: 'background: purple;' 
 * }}></Div>
 * 
 * 
 * or write like you write css
 * 
 * <Div css={`
 *  background: red;
 *  :hover {
 *    background: blue;
 *  }
 * `}></Div>
 */

import Typhography from './core/Typhography.styled';
import { Grid, Flex } from './core/Display.styled';
import { Div, Section, Article, Header, Footer, Figure } from './core/HtmlTag.styled';

export { Typhography, Grid, Flex, Div, Section, Article, Header, Footer, Figure };
