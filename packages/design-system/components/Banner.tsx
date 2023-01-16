import styled from '@emotion/styled';
import { TeamKeyType } from '../@types/Team';
import { theme } from '../theme';

interface Props {
  teamName: TeamKeyType;
}

const Banner = ({ teamName }: Props) => {
  return <Wrapper teamName={teamName} />;
};

const Wrapper = styled.div<Props>`
  width: 100%;
  height: 240px;
  margin-top: 80px;
  margin-bottom: 32px;
  background-color: ${(props) => theme.colors.team[props.teamName]};
  content: '';
`;

export default Banner;
