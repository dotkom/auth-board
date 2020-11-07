import React from 'react';
import { CompactLogo } from '@dotkomonline/design-system';

const ImageWithDefault: React.FC<{ width?: string }> = ({ children, width }) => {
  const hasSrc = React.Children.only(children) && React.isValidElement(children) && children.props['src'];

  return hasSrc ? <>{children}</> : <CompactLogo width={width} />;
};

export default ImageWithDefault;
