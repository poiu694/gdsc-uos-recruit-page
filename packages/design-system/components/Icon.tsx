import styled from '@emotion/styled';
import React from 'react';
import {
  Blog,
  Calender,
  Down,
  Form,
  Github,
  Gmail,
  Grid,
  Left,
  Right,
  Up,
  User,
} from '../asset/svg';

const ICONS = {
  down: Down,
  up: Up,
  left: Left,
  right: Right,
  github: Github,
  gmail: Gmail,
  blog: Blog,
  grid: Grid,
  form: Form,
  user: User,
  calender: Calender,
} as const;

type IconValueType = typeof ICONS;
export type IconKeyType = keyof IconValueType;

interface Props extends React.SVGProps<SVGSVGElement> {
  type: IconKeyType;
  color?: string;
  hoverAction?: boolean;
}

function Icon({ type, color, hoverAction = false, ...restProps }: Props) {
  return (
    <Wrapper color={color} className={hoverAction ? 'hover-action' : ''}>
      {React.createElement(ICONS[type], { ...restProps })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  &.hover-action svg {
    -webkit-transition: all 0.1s ease-in-out; /* Safari */
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  &.hover-action:hover svg {
    fill: ${(props) => props.color};
    transform: scale(1.2);
  }
`;

export default Icon;
