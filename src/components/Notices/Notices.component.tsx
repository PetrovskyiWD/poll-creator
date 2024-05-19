import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import styles from './Notices.module.css'
import { TValidationError } from '../../types/global.types'

interface NoticesProps {
  validationErrors: TValidationError
  success: boolean
  error: boolean
}

const Notices: FC<NoticesProps> = ({ validationErrors, success, error }) => {
  const [message, setMessage] = useState('')
  const classnames = cn({
    [styles.errorMsg]: validationErrors || error,
    [styles.successMsg]: success,
  })

  const getValidationMessage = (errors: TValidationError): string => {
    if (errors?.question) return 'Question is required.'
    if (errors?.questionMark) return 'Question should end with a question mark.'
    if (errors?.options) return 'At least two options are required.'
    if (errors?.option) return 'Option cannot be empty.'
    if (errors?.optionsUnique) return 'Options must be unique.'
    if (errors?.optionsMax) return 'No more than 10 options allowed.'
    return ''
  }

  useEffect(() => {
    if (error) {
      setMessage('Failed to create a poll. Please try again later.')
    } else if (success) {
      setMessage('Poll created successfully!')
    } else {
      setMessage(getValidationMessage(validationErrors))
    }

    const timer = setTimeout(() => {
      setMessage('')
    }, 5000)

    return () => clearTimeout(timer)
  }, [success, error, validationErrors])

  return <div className={styles.noticesContainer}>{message && <div className={classnames}>{message}</div>}</div>
}

export default Notices
