import styled from '@emotion/styled';
import { TeamKeyType } from '../@types/Team';
import { theme } from '../theme';

interface BannerProps {
  teamName: TeamKeyType;
}

const Banner = ({ teamName }: BannerProps) => {
  return <Wrapper teamName={teamName} />;
};

const Wrapper = styled.div<BannerProps>`
  width: 100%;
  height: 240px;

  margin: 80px auto;

  background-color: ${(props) => theme.colors.team[props.teamName]};
  content: '';
`;

export default Banner;
