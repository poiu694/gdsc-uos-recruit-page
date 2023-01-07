import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { useTabContext } from './TabContext';

interface Props {
  value: string;
}

function TabContent({ value, children }: PropsWithChildren<Props>) {
  const { value: currentTabValue } = useTabContext();

  if (value !== currentTabValue) {
    return null;
  }
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div``;

export default TabContent;
