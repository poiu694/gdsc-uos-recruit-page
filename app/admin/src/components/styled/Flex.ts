import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface Props {
  gap: CSSProperties['gap'];
  flexGrow: CSSProperties['flexGrow'];
  flexWrap: CSSProperties['flexWrap'];
  flexBasis: CSSProperties['flexBasis'];
  flexShrink: CSSProperties['flexShrink'];
  flexDirection: CSSProperties['flexDirection'];
  justifyContent: CSSProperties['justifyContent'];
  alignItems: CSSProperties['alignItems'];
}

const Flex = styled.div<Partial<Props>>`
  display: flex;
  gap: ${(props) => (typeof props.gap === 'number' ? `${props.gap}px` : props.gap)};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  flex-grow: ${(props) => props.flexGrow};
  flex-basis: ${(props) => props.flexBasis};
  flex-shirink: ${(props) => props.flexShrink};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export default Flex;
