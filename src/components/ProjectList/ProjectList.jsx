import styles from './projectList.module.css'

export const ProjectList = (props) => {
  const products = props.products;
  
  return (
    <div className={styles['project-list']}>
      {products.map((prod) => (
        <img 
          src={prod.img} 
          alt={`${prod.category} product`} 
          className={styles['project-img']}
        />
      ))}
    </div>
  )
}
