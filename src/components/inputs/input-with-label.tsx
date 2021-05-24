import './input-with-label.scss';

import * as React from 'react';

interface InputWithLabelProps {
    label: string,
    onChange?: (param: any) => void,
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, onChange, ...props }) => (
  <label
    htmlFor={label}
    className="input-with-label"
  >
    <input
      className="input-with-label-field"
      placeholder={label}
      onChange={onChange}
      {...props}
    />
    <span className="input-with-label-text">
      {label}
    </span>
  </label>
);

export default InputWithLabel;
