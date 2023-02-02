import styled from '@emotion/styled';
import { theme, Typography } from 'gdsc-uos-design-system';
import { Link } from 'react-router-dom';

import { Flex } from '../styled';

function MainRecruitInfoBox() {
  return (
    <Wrapper>
      <Typography type="h6">Main Page 관리</Typography>
      <Flex flexDirection="column" gap={12} style={{ marginTop: 16 }}>
        <Typography type="body4">메인 페이지는 Github에서 관리됩니다.</Typography>
        <Typography type="body4">
          <a href="https://github.com/GDSC-University-of-Seoul" target="_blank" rel="external">
            관리하러가기
          </a>
        </Typography>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  & div > a {
    text-decoration: none;
    color: ${theme.colors.primary.blue};
  }
`;

export default MainRecruitInfoBox;
