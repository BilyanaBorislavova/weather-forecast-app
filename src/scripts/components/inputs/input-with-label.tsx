import './input-with-label.scss';

import * as React from 'react';

interface InputWithLabelProps {
    label: string,
    props?: any,
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, ...props }) => (
  <label
    htmlFor={label}
    className="input-with-label"
  >
    <input
      className="input-with-label-field"
      placeholder={label}
      {...props}
    />
    <span className="input-with-label-text">
      {label}
    </span>
  </label>
);

export default InputWithLabel;
