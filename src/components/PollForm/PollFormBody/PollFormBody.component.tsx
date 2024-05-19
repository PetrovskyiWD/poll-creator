import { FC } from 'react'

import styles from './PollFormBody.module.css'

interface PollFormBodyProps {
  children: React.ReactNode
}

const PollFormBody: FC<PollFormBodyProps> = ({ children }) => <div className={styles.formBody}>{children}</div>

export default PollFormBody
