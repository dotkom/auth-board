import { getBasicInfoUrl, getClientViewUrl } from 'common/utils/urls';
import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';

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
  
  > a {
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    width: max-content;
  }
  > a.active {
    background-color #0D5474; 
    color: white;
  }
`;

const Menu: React.FC<Props> = () => {
  const {
    query: { clientId, subpageName },
  } = useRouter();

  const activePage = Array.isArray(subpageName) ? subpageName[0] : 'overview';

  if (!Array.isArray(clientId)) {
    const id = Number(clientId);
    return (
      <MenuWrapper>
        <Link {...getClientViewUrl(id)}>
          <a className={activePage === 'overview' ? 'active' : ''}>Overview</a>
        </Link>
        <Link {...getBasicInfoUrl(id)}>
          <a className={activePage === 'basicInfo' ? 'active' : ''}>Basic info</a>
        </Link>
      </MenuWrapper>
    );
  }
  return undefined;
};

export default Menu;
