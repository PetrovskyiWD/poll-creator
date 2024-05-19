import { FC, LabelHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Label.module.css'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string
  children?: React.ReactNode
}

const Label: FC<LabelProps> = ({ label, children, ...rest }) => (
  <label {...rest} className={cn(styles.label, rest.className)}>
    {label || children}
  </label>
)

export default Label
