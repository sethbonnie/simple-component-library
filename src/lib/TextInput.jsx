import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  display: inline-block;
  margin-bottom: .5rem;
  font-size: 16px;
  font-weight: 400;
  color: rgb(33, 37, 41);
`;

const Label = styled.label`
  display: block;
  color: #555;
`;

const TextInput = ({ type = 'text', label, value, onChange }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    <Input
      type={type}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </FormGroup>
);

export default TextInput;
