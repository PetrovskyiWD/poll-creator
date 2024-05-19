import { FC } from 'react'

import styles from './PollFormFooter.module.css'

interface PollFormFooterProps {
  children: React.ReactNode
}

const PollFormFooter: FC<PollFormFooterProps> = ({ children }) => <div className={styles.formFooter}>{children}</div>

export default PollFormFooter
