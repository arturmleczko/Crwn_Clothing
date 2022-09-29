import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  BASE = 'BASE',
  GOOGLE = 'GOOGLE-SIGN-IN',
  INVERTED = 'INVERTED',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.BASE): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.BASE]: BaseButton,
    [BUTTON_TYPE_CLASSES.GOOGLE]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.INVERTED]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
