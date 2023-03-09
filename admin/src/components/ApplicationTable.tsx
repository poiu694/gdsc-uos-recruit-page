import React from 'react';
import styled from '@emotion/styled';
import {
  Td,
  Tr,
  Chip,
  Table,
  TBody,
  THead,
  Button,
  Typography,
  ButtonHierarchy,
} from 'gdsc-uos-design-system';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { UserApplication } from '@/@types';
import { convertChipColorByState, convertChipColorByTeam } from '@/utils';

interface Props {
  pageSize: number;
  applications: UserApplication[];
}

function ApplicationTable({ pageSize, applications }: Props) {
  const theme = useTheme();
  const navigate = useNavigate();

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
            <Typography type="body4">시즌</Typography>
          </Td>
          <Td>
            <Typography type="body4">평과 결과</Typography>
          </Td>
          <Td>
            <Typography type="body4">평가 여부</Typography>
          </Td>
          <Td>
            <Typography type="body4">코어 신청 여부</Typography>
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
                type={convertChipColorByTeam(apply.team)}
                label={apply.team}
              />
            </Td>
            <Td>{apply.season}</Td>
            <Td style={{ textAlign: 'center' }}>
              <Chip
                variants="filled"
                type={convertChipColorByState(apply.status)}
                label={apply.status}
              />
            </Td>
            <Td style={{ paddingLeft: 40 }}>{apply.isFinishEvaluation ? '⭕️' : '❌'}</Td>
            <Td style={{ paddingLeft: 40 }}>{apply.isApplyCore ? '⭕️' : '❌'}</Td>
            <Td>
              <Button
                style={{ padding: 8 }}
                onClick={() => navigate(`/apply/${apply.applicationId}`)}
              >
                <Typography type="body5" color={theme.colors.primary.white}>
                  지원서 링크
                </Typography>
              </Button>
            </Td>
            <Td>
              <Button
                style={{ padding: 8 }}
                hierarchy={ButtonHierarchy.Success}
                onClick={() => navigate(`/interview/${apply.applicationId}`)}
              >
                <Typography type="body5" color={theme.colors.primary.white}>
                  면접 링크
                </Typography>
              </Button>
            </Td>
          </Tr>
        ))}
      </TBody>
    </Wrapper>
  );
}

const Wrapper = styled(Table)``;

export default React.memo(ApplicationTable);
