import styled from '@emotion/styled';
import {
  Td,
  Tr,
  Chip,
  Table,
  TBody,
  THead,
  theme,
  Button,
  Typography,
  ButtonHierarchy,
} from 'gdsc-uos-design-system';
import React from 'react';

import { HistoryType, UserApplication } from '../@types';
import HistoryLinkList from './HistoryLinkList';
import { convertChipColorByState, convertChipColorByTeam } from '../utils';

interface Props {
  pageSize: number;
  applications: UserApplication[];
}

const toggleIndexInArray = (list: boolean[], willUpdateIndex: number) => {
  return [...list].map((flag, index) =>
    index === willUpdateIndex ? !flag : flag
  );
};

function ApplicationTable({ pageSize, applications }: Props) {
  const [isApplicationListOpen, setIsApplicationListOpen] = React.useState<
    boolean[]
  >([...new Array(pageSize)].fill(false));
  const [isInterviewListOpen, setIsInterviewListOpen] = React.useState<
    boolean[]
  >([...new Array(pageSize)].fill(false));

  const handleClickLinkButton = (
    type: HistoryType,
    willUpdateIndex: number
  ) => {
    if (type === 'application') {
      setIsApplicationListOpen((prev) =>
        toggleIndexInArray(prev, willUpdateIndex)
      );
    } else if (type === 'interview') {
      setIsInterviewListOpen((prev) =>
        toggleIndexInArray(prev, willUpdateIndex)
      );
    }
  };

  return (
    <Wrapper variant="striped">
      <THead>
        <Tr>
          <Td>
            <Typography type="body4">이름</Typography>
          </Td>
          <Td>
            <Typography type="body4">지원 플랫폼</Typography>
          </Td>
          <Td>
            <Typography type="body4">상태</Typography>
          </Td>
          <Td>
            <Typography type="body4">평가 여부</Typography>
          </Td>
          <Td>
            <Typography type="body4">코어 여부</Typography>
          </Td>
          <Td>
            <Typography type="body4">지원서</Typography>
          </Td>
          <Td>
            <Typography type="body4">면접 요약</Typography>
          </Td>
        </Tr>
      </THead>
      <TBody>
        {applications.slice(0, pageSize).map((apply, index) => (
          <Tr key={apply.id}>
            <Td>
              <Typography type="body4">{apply.name}</Typography>
            </Td>
            <Td>
              <Chip
                variants="outlined"
                type={convertChipColorByTeam(
                  String(apply.team).toLocaleLowerCase()
                )}
                label={apply.team}
              />
            </Td>
            <Td style={{ textAlign: 'center' }}>
              <Chip
                variants="filled"
                type={convertChipColorByState(apply.state)}
                label={apply.state}
              />
            </Td>
            <Td style={{ paddingLeft: 40 }}>
              {apply.isFinishEvaluation ? '⭕️' : '❌'}
            </Td>
            <Td style={{ paddingLeft: 40 }}>
              {apply.isApplyCore ? '⭕️' : '❌'}
            </Td>
            <Td>
              <Button
                style={{ padding: 8 }}
                onClick={() => handleClickLinkButton('application', index)}
              >
                <Typography type="body5" color={theme.colors.primary.white}>
                  지원서 링크
                </Typography>
              </Button>
              {isApplicationListOpen[index] && (
                <HistoryLinkList
                  type="application"
                  linkList={apply.applicationList}
                />
              )}
            </Td>
            <Td>
              <Button
                style={{ padding: 8 }}
                hierarchy={ButtonHierarchy.Success}
                onClick={() => handleClickLinkButton('interview', index)}
              >
                <Typography type="body5" color={theme.colors.primary.white}>
                  면접 링크
                </Typography>
              </Button>
              {isInterviewListOpen[index] && (
                <HistoryLinkList
                  type="interview"
                  linkList={apply.interviewList}
                />
              )}
            </Td>
          </Tr>
        ))}
      </TBody>
    </Wrapper>
  );
}

const Wrapper = styled(Table)``;

export default ApplicationTable;
