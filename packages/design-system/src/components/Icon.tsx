import styled from '@emotion/styled';
import React from 'react';
import {
  Up,
  Blog,
  User,
  Down,
  Form,
  Grid,
  Left,
  Plus,
  Right,
  Gmail,
  Close,
  Github,
  UserPlus,
  Calender,
  DoubleLeft,
  DoubleRight,
  Search,
} from '../asset/svg';

const ICONS = {
  up: Up,
  left: Left,
  down: Down,
  blog: Blog,
  grid: Grid,
  form: Form,
  user: User,
  plus: Plus,
  close: Close,
  right: Right,
  gmail: Gmail,
  github: Github,
  search: Search,
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

export function Icon({
  type,
  color,
  hoverAction = false,
  ...restProps
}: Props) {
  return (
    <Wrapper color={color} className={hoverAction ? 'hover-action' : ''}>
      {React.createElement(ICONS[type], { ...restProps })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  path {
    stroke: ${(props) => props.color};
  }

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
