import { FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input: FC<InputProps> = ({ ...rest }) => <input {...rest} className={cn(styles.inputText, rest.className)} />

export default Input
