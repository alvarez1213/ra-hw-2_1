import styles from './toolbar.module.css'
import { v1 as uuidv1 } from 'uuid'

export const Toolbar = (props) => {
  const filters = props.filters;

  return (
    <div className={styles['toolbar']}>
        {filters.map((filter) => (
          <button 
            key={uuidv1()}
            className={filter === props.selected
              ? `${styles['toolbar-btn']} ${styles['toolbar-btn-selected']}`
              : styles['toolbar-btn']
            } 
            onClick={props.onSelectFilter}
          >
            { filter }
          </button>
        ))}
    </div>
  )
} 
