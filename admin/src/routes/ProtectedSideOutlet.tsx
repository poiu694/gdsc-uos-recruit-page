import { SideMenu } from '@/components';
import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

//TODO: login이 되어있지 않은 상태면 접근 차단
const SideMenuMemo = React.memo(SideMenu);
function ProtectedSideOutlet() {
  return (
    <>
      <SideMenuMemo />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  margin-top: 16px;
  margin-left: 300px;
  margin-bottom: 80px;
`;

export default ProtectedSideOutlet;
