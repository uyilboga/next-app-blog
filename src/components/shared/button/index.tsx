import React from 'react';
import { ButtonProps } from '@/components/shared/button/Button.types';
import styles from './Button.module.scss';

const Button = (props: ButtonProps) => {
  const { text, variant = 'primary', onClick } = props;

  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
