import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonHierarchy,
  theme,
  Typography,
} from 'gdsc-uos-design-system';

import { HistoryType } from '../@types';

interface Props {
  type: HistoryType;
  linkList: { id: number; title: string }[];
}

function HistoryLinkList({ type, linkList }: Props) {
  const navigate = useNavigate();

  const handleClickLink = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const item = e.target as HTMLDivElement;
    if (item.id) {
      navigate(`/${type === 'application' ? 'apply' : 'interview'}/${item.id}`);
    }
  };

  return (
    <Wrapper>
      {linkList.length > 0 && (
        <ULList onClick={handleClickLink}>
          {linkList.map((link) => (
            <LinkItem key={link.id}>
              <Button id={`${link.id}`} hierarchy={ButtonHierarchy.Parent}>
                {link.title}
              </Button>
            </LinkItem>
          ))}
        </ULList>
      )}
      {linkList.length === 0 && (
        <Typography type="body5" color={theme.colors.primary.red}>
          데이터가 없습니다.
        </Typography>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 56px;
  padding: 12px;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.ui.border};
  border-radius: 8px;
  z-index: 9995;
`;

const ULList = styled.ul`
  & > li:nth-of-type(n + 2) {
    padding-top: 4px;
    border-top: 1px solid ${theme.colors.ui.border};
  }
`;

const LinkItem = styled.li`
  margin-block: 4px;
`;

export default HistoryLinkList;
