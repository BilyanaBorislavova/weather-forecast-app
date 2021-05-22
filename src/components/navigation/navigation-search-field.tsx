import * as React from 'react';
import InputWithLabel from '../inputs/input-with-label';

interface NavigationSearchFieldProps {
    props?: any,
}

const NavigationSearchField: React.FC<NavigationSearchFieldProps> = ({ props }) => (
  <InputWithLabel
    label="Search city..."
    {...props}
  />
);

export default NavigationSearchField;
