import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Typography } from 'gdsc-uos-design-system';
import { PieChart } from 'react-minimal-pie-chart';

import { Flex } from './styled';

interface Props {
  title: string;
}

function ApplicationStatusChart({ title }: Props) {
  const theme = useTheme();

  return (
    <Wrapper>
      <Flex flexDirection="column" alignItems="center" gap={16}>
        <Typography type="h4">{title}</Typography>
        <PieChart
          animate
          label={({ dataEntry }) => `${dataEntry.value}(${Math.round(dataEntry.percentage)}%)`}
          labelStyle={{
            fontSize: 5,
          }}
          data={[
            { title: 'Frontend', value: 1, color: theme.colors.team.frontend, key: '123123' },
            { title: 'Backend', value: 10, color: theme.colors.team.backend },
            { title: 'Data/ML', value: 7, color: theme.colors.team.data_ml },
            { title: 'Mobile', value: 5, color: theme.colors.team.mobile },
            { title: 'Design', value: 3, color: theme.colors.team.design },
          ]}
        />
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)``;

export default ApplicationStatusChart;
