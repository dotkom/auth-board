import {
  getBasicInfoUrl,
  getClientViewUrl,
  getExtendedInfoUrl,
  getOauthDetailsUrl,
  getDeleteUrl,
} from 'common/utils/urls';
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

  & > a {
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    width: max-content;
    text-decoration: none;
  }

  & > a:visited {
    color: black;
  }

  & > a.active {
    background-color: #0d5474;
    color: white;
    font-weight: bold;
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
        <Link {...getExtendedInfoUrl(id)}>
          <a className={activePage === 'extendedInfo' ? 'active' : ''}>Extended info</a>
        </Link>
        <Link {...getOauthDetailsUrl(id)}>
          <a className={activePage === 'oauthDetails' ? 'active' : ''}>OAuth details</a>
        </Link>
        <Link {...getDeleteUrl(id)}>
          <a className={activePage === 'delete' ? 'active' : ''}>Delete</a>
        </Link>
      </MenuWrapper>
    );
  }
  return undefined;
};

export default Menu;
