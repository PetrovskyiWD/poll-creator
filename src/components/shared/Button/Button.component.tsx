import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  rounded = 'rounded',
  disabled = 'disabled',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: keyof typeof ButtonVariants
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  const classnames = cn(rest.className, {
    [styles.primaryBtn]: variant === ButtonVariants.primary,
    [styles.secondaryBtn]: variant === ButtonVariants.secondary,
    [styles.roundedBtn]: variant === ButtonVariants.rounded,
    [styles.disabledBtn]: variant === ButtonVariants.disabled,
  })

  return (
    <button {...rest} className={classnames}>
      {children}
    </button>
  )
}

export default Button
