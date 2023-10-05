import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const LoadingPage = () => {
  return (
    <div>
      <div className={styles.loading_header}>
        <Skeleton />
        <Skeleton width={200} />
      </div>

      <div className={styles.skeleton_container}>
        <Skeleton width={400} height={350} />
        <div className={styles.content}>
          <Skeleton width={300} />
          <Skeleton width={250} />
          <Skeleton width={200} />
          <br />
          <Skeleton height={100} width={400} />
          <br />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  )
}

export default LoadingPage

const styles = {
  loading_header: 'p-5 md:p-12',
  skeleton_container: 'flex flex-col justify-center items-center md:items-start md:justify-start md:flex-row md:p-10 pl-0 m-5 ml-0',
  content: 'pl-0 md:pl-5 mr-5 mt-10 md:mt-0',
}