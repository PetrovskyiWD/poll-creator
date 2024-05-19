import { FC } from 'react'

import styles from './PollFormTitle.module.css'

interface PollFormTitleProps {
  children: React.ReactNode
}

const PollFormTitle: FC<PollFormTitleProps> = ({ children }) =>
  <div className={styles.formTitle}>
    {children}
  </div>

export default PollFormTitle
