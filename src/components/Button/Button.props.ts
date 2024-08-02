import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  arrow: 'right' | 'down' | 'none';
  children: ReactNode;
  appearance: 'primary' | 'ghost';
}