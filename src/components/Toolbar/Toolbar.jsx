import styles from './toolbar.module.css'

export const Toolbar = (props) => {
  const filters = props.filters;

  return (
    <div className={styles['toolbar']}>
        {filters.map((filter) => (
          <button 
            className={styles['toolbar-btn']} 
            onClick={props.onSelectFilter}>{ filter }
          </button>
        ))}
    </div>
  )
} 
