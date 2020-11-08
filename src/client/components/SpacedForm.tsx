import styled, { StyledComponentProps } from 'styled-components';
import React from 'react';

const FormWithMargins = styled.form`
  & > * {
    margin: 3% auto;
  }
`;

// I have yet to find out how to write correct StyledComponentProps
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type FormProps = StyledComponentProps<'form', any, any, any>;

const ControlledSpacedForm: React.FC<FormProps> = ({ children, ...rest }) => {
  return (
    <FormWithMargins {...rest} onClick={(e) => e.preventDefault()} onSubmit={(e) => e.preventDefault()}>
      {children}
    </FormWithMargins>
  );
};

export default ControlledSpacedForm;
