import styled from '@emotion/styled';
import React from 'react';
import {
  Blog,
  Calender,
  DoubleLeft,
  DoubleRight,
  Down,
  Form,
  Github,
  Gmail,
  Grid,
  Left,
  Right,
  Up,
  User,
  UserPlus,
} from '../asset/svg';

const ICONS = {
  up: Up,
  left: Left,
  down: Down,
  blog: Blog,
  grid: Grid,
  form: Form,
  user: User,
  right: Right,
  gmail: Gmail,
  github: Github,
  calender: Calender,
  userPlus: UserPlus,
  doubleLeft: DoubleLeft,
  doubleRight: DoubleRight,
} as const;

type IconValueType = typeof ICONS;
export type IconKeyType = keyof IconValueType;

interface Props extends React.ComponentPropsWithoutRef<'svg'> {
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
