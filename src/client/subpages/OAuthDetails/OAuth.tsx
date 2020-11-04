import CodeText from 'client/components/CodeText';
import SectionHeader from 'client/components/SectionHeader';
import React from 'react';

const OAuth: React.FC = () => (
  <>
    <SectionHeader>Authorization endpoint</SectionHeader>
    <CodeText>https://online.ntnu.no/openid/authorize</CodeText>
    <SectionHeader>Token endpoint</SectionHeader>
    <CodeText>https://online.ntnu.no/openid/token</CodeText>
  </>
);

export default OAuth;
