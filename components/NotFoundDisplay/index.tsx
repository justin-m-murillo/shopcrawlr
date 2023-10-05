import React from 'react'
import styles from './styles';

const NotFoundDisplay = () => {
  return (
    <div className={styles.not_found_container}>
      <h1 className={styles.not_found_title}>Whoops...</h1>
      <h2 className={styles.not_found_desc}>
        It looks like the product could not be found!
      </h2>
    </div>
  )
}

export default NotFoundDisplay;