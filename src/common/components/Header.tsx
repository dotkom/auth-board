import { Logo } from '@dotkomonline/design-system';
import User from 'authentication/components/User';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const Title = styled.a`
  justify-self: center;
  grid-column: 2;
  grid-row: 1;
  font-family: 'colfaxLight', Arial;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const TitleText = styled.h1`
  font-weight: normal;
  font-family: Poppins;
  font-size: xx-large;
  margin: 0;
  margin-left: 15px;
  position: relative;
  top: 4px;
  line-height: 1;
`;

const Header: React.FC = () => (
  <HeaderSection>
    <Link href="/clients">
      <Title>
        <Logo width="140px" />
        <TitleText>SSO Dashboard</TitleText>
      </Title>
    </Link>
    <User />
  </HeaderSection>
);

export default Header;
