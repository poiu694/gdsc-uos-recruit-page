import styled from '@emotion/styled';
import React from 'react';
import { Blog, Down, Github, Gmail, Right, Up } from '../asset/svg';

const ICONS = {
  down: Down,
  up: Up,
  right: Right,
  github: Github,
  gmail: Gmail,
  blog: Blog,
} as const;

type IconValueType = typeof ICONS;
export type IconKeyType = keyof IconValueType;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: IconKeyType;
  color?: string;
  hoverAction?: boolean;
}

function Icon({ type, color, hoverAction = true, ...restProps }: IconProps) {
  return (
    <Wrapper color={color} className={hoverAction ? 'hover-action' : ''}>
      {React.createElement(ICONS[type], { ...restProps })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;

  svg {
    -webkit-transition: all 0.1s ease-in-out; /* Safari */
    transition: all 0.1s ease-in-out;
  }

  &.hover-action:hover svg {
    fill: ${(props) => props.color};
    transform: scale(1.2);
  }
`;

export default Icon;
