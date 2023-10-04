'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import styles from './styles'
import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type Props = {}

const SearchButton = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <button className={styles.search_btn}>
      {pending && 'Searching...'}
      {!pending && <MagnifyingGlassIcon className={styles.magnifying_glass} />}
    </button>
  )
}

export default SearchButton

