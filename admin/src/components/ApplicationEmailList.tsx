import React from 'react';
import styled from '@emotion/styled';
import { Button, ButtonHierarchy, Chip, theme, Typography } from 'gdsc-uos-design-system';

import { Flex } from './styled';
import { useEmailAction } from '@/hooks';
import SelectOption from './SelectOption';
import ToggleSwitchBox from './ToggleSwitchBox';
import { convertChipColorByState } from '@/utils';
import { ApplyState, UserApplication } from '@/@types';

interface Props {
  list: UserApplication[];
  updateEmailList: (nextEmailItem: UserApplication | UserApplication[]) => void;
  isSelectedEmail: (emailItem: UserApplication) => boolean;
  isAllActiveEmail: (emails: UserApplication[]) => boolean;
}

function ApplicationEmailList({ list, updateEmailList, isSelectedEmail, isAllActiveEmail }: Props) {
  const [isEntireTarget, setIsEntireTarget] = React.useState<boolean>(false);
  const [seasonFilterValue, setSeasonFilterValue] = React.useState<string>('전체');
  const [applyStateFilterValue, setApplyStateFilterValue] = React.useState<ApplyState | '전체'>(
    '전체'
  );

  const { getFilteredList } = useEmailAction();
  const filteredUserList = getFilteredList(list, applyStateFilterValue, seasonFilterValue);

  const handleClickEntireToggleButton = () => {
    updateEmailList(filteredUserList);
    setIsEntireTarget((prev) => !prev);
  };

  const handleClickEmailItem = (email: UserApplication) => {
    updateEmailList(email);
  };

  React.useEffect(() => {
    // 필터 값이 바뀌면 entire 토글 버튼을 최신 상태로 유지합니다.
    const isAllActive = isAllActiveEmail(filteredUserList);
    setIsEntireTarget(isAllActive);
  }, [filteredUserList]);

  return (
    <Wrapper>
      <Flex gap={16} style={{ marginBottom: 16 }}>
        <SelectOption
          label="합격 상태"
          value={applyStateFilterValue}
          optionList={['전체', '서류 제출', '서류 불합격', '서류 합격', '최종 불합격', '최종 합격']}
          onChange={(e) => setApplyStateFilterValue(e.target.value as ApplyState | '전체')}
        />
        <SelectOption
          label="지원 시즌"
          value={seasonFilterValue}
          optionList={[
            '전체',
            '2021 S/S',
            '2021 F/W',
            '2022 S/S',
            '2022 F/W',
            '2023 S/S',
            '2023 F/W',
            '2024 S/S',
            '2024 F/W',
          ]}
          onChange={(e) => setSeasonFilterValue(e.target.value)}
        />
        <ToggleSwitchBox
          label="전체 대상"
          value={isEntireTarget}
          onClick={handleClickEntireToggleButton}
        />
      </Flex>
      <ListWrapper>
        <Typography type="h5" textAlign="center" style={{ paddingBottom: 10 }}>
          Email List
        </Typography>
        <UserList>
          {filteredUserList.map((application) => (
            <UserEmailItem
              key={application.id}
              className={isSelectedEmail(application) ? 'active' : ''}
            >
              <Button
                fullWidth
                hierarchy={ButtonHierarchy.Parent}
                onClick={() => handleClickEmailItem(application)}
              >
                <Flex gap={16} justifyContent="space-around">
                  <Typography type="body4">{application.name}</Typography>
                  <Typography type="body4">{application.season}</Typography>
                  <Chip
                    variants="filled"
                    type={convertChipColorByState(application.status)}
                    label={application.status}
                  />
                </Flex>
              </Button>
            </UserEmailItem>
          ))}
        </UserList>
      </ListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ListWrapper = styled.div`
  overflow-y: scroll;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.ui.border};
  border-radius: 10px;
  width: 100%;
  height: 480px;
  padding: 16px;
`;

const UserList = styled.ul`
  border-top: 1px solid ${theme.colors.ui.border};
`;

const UserEmailItem = styled.li`
  height: 48px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.12s ease-in;

  & > button {
    height: 100%;
  }

  &:nth-of-type(n + 2) {
    border-top: 1px solid ${theme.colors.ui.border};
  }

  &:hover {
    background-color: ${theme.colors.ui.hover};
  }

  &.active {
    background-color: ${theme.palette.gray200};
  }

  &.active:hover {
    background-color: ${theme.palette.gray250};
  }
`;

export default ApplicationEmailList;
