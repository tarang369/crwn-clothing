// import './custom-button.scss';

import { CustomButtonContainer } from './custom-button.styles';
import React from 'react';

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
