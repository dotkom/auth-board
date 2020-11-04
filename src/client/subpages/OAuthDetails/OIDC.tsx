import CodeText from 'client/components/CodeText';
import SectionHeader from 'client/components/SectionHeader';
import React from 'react';

const OIDC: React.FC = () => (
  <>
    <SectionHeader>OpenID Connect Auto configuration</SectionHeader>
    <CodeText>https://online.ntnu.no/openid/.well-known/openid-configuration/</CodeText>
  </>
);

export default OIDC;
