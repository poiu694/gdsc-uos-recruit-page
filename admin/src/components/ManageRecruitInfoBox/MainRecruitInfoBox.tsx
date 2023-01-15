import styled from '@emotion/styled';
import { Typography } from 'gdsc-uos-design-system';

import { Flex } from '../styled';

function MainRecruitInfoBox() {
  return (
    <Wrapper>
      <Typography type="h6">Main Page 관리</Typography>
      <Flex flexDirection="column" gap={12} style={{ marginTop: 16 }}>
        <Typography type="body4">
          소개글: 2022년부터 함께 할 사람을 찾습니다.
        </Typography>
        <Typography type="body4">
          채용글: 저희와 함께 할 새로운 멤버를 구합니다.\n많은 지원
          부탁드립니다.
        </Typography>
        <Typography type="body4">서류 접수: 2022.08.15 ~ 2022.08.29</Typography>
        <Typography type="body4">서류 발표: 2022.09.01</Typography>
        <Typography type="body4">
          인터뷰 진행: 2022.09.03 ~ 2022.09.09
        </Typography>
        <Typography type="body4">최종 발표: 2022.09.14</Typography>
        <Typography type="body4">
          팀 소개글: 성장을 원하고 열정적인 사람을 찾습니다.\n당신의 열정을
          뽐내주세요.
        </Typography>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default MainRecruitInfoBox;
