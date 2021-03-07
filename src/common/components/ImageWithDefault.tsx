import React from 'react';
import { Text } from '@chakra-ui/react';

const ImageWithDefault: React.FC<{ width?: string }> = ({ children, width }) => {
  const hasSrc = React.Children.only(children) && React.isValidElement(children) && children.props['src'];

  return hasSrc ? <>{children}</> : <Text>No fallback image specified</Text>;
};

export default ImageWithDefault;
