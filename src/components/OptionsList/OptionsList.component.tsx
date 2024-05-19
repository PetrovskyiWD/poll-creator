import { FC } from 'react'

import { TOption } from '../../types/global.types'

import styles from './OptionsList.module.css'
import OptionItem from './OptionItem/OptionItem.component'

interface OptionListProps {
  list: TOption[]
  handleDeleteListItem: (id: number) => void
}

const OptionsList: FC<OptionListProps> = ({ list, handleDeleteListItem }) =>
  list.length > 0 ? (
    <div className={styles.optionsList}>
      {list.map((option) => (
        <OptionItem key={option.id} handleDelete={handleDeleteListItem} {...option} />
      ))}
    </div>
  ) : null

export default OptionsList
