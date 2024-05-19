import { FC } from 'react'

import { TOption } from '../../../types/global.types'
import Button from '../../shared/Button/Button.component'

import styles from './OptionItem.module.css'

interface OptionItemProps extends TOption {
  handleDelete: (id: number) => void
}

const OptionItem: FC<OptionItemProps> = ({ id, name, handleDelete }) => {
  return (
    <div className={styles.optionItem}>
      <span>
        {name}
      </span>
      <Button
        variant='secondary'
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </div>
  )
}

export default OptionItem
