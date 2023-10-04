import { SearchSelect, SearchSelectItem } from '@tremor/react'
import React from 'react'

type SearchSelectorProps = {
  items: { label: string; value: string }[];
  placeHolder?: string;
  setState: React.Dispatch<React.SetStateAction<string>>
}

const SearchSelector = ({ items, placeHolder, setState }: SearchSelectorProps) => {
  return (
    <SearchSelect 
      className='min-w-4' 
      placeholder={placeHolder}
      onValueChange={value => setState(value)}  
    >
      {items.map((item, index) => (
        <SearchSelectItem key={index} value={item.value}>
          {item.label}
        </SearchSelectItem>
      ))}
    </SearchSelect>
  )
}

export default SearchSelector