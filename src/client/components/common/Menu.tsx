import { getBasicInfoUrl, getClientViewUrl } from 'common/utils/urls';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  id: number;
  active: string;
}

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid black;
`;

const Menu: React.FC<Props> = ({ id, active }) => {
  return (
    <MenuWrapper>
      <Link {...getClientViewUrl(id)}>
        <a>Overview</a>
      </Link>
      <Link {...getBasicInfoUrl(id)}>
        <a>Basic info</a>
      </Link>
    </MenuWrapper>
  );
};

export default Menu;
