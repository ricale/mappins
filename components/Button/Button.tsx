import { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
};
function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
