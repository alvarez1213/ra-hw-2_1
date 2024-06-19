import styles from './projectList.module.css'

import { v1 as uuidv1 } from 'uuid'

export const ProjectList = (props) => {
  const products = props.products;
  
  return (
    <div className={styles['project-list']}>
      {products.map((prod) => (
        <img 
          key={ uuidv1() }
          src={prod.img} 
          alt={`${prod.category} product`} 
          className={styles['project-img']}
        />
      ))}
    </div>
  )
}
