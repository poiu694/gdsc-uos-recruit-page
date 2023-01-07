import React from 'react';
import styled from '@emotion/styled';
import { Title } from '@gdsc-uos-recruit-page/design-system';

import { ContentWrapper, SideMenu } from '../components';

function ManageRecruitInfoPage() {
  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title
          title="Recruit-Info"
          descriptions="리크루팅 관련 정보를 다루는 페이지입니다."
        />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default ManageRecruitInfoPage;
