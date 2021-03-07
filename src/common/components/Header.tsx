import { Heading, LinkBox, LinkOverlay, SimpleGrid } from '@chakra-ui/react';
import User from 'authentication/components/User';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => (
  <SimpleGrid templateColumns="1fr 2fr 1fr">
    <LinkBox gridColumn="2" justifySelf="center">
      <Link href="/clients" passHref>
        <LinkOverlay>
          <Heading>SSO Dashboard</Heading>
        </LinkOverlay>
      </Link>
    </LinkBox>
    <User />
  </SimpleGrid>
);

export default Header;
