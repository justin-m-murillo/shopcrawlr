import styles from '@/components/Header/styles'
import { Select, SelectItem } from '@tremor/react'
import React from 'react'

type SelectorProps = {
  items: Record<string, string>;
  placeHolder?: string;
  value: string;
  onSelect: (value: string) => void;
}

const Selector = ({ items, placeHolder, value, onSelect }: SelectorProps) => {
  
  
  return (
    <Select 
      className='min-w-4' 
      placeholder={placeHolder}
      defaultValue={value}
      onValueChange={onSelect}
    >
      {Object.entries(items).map(([key, value]) => (
        <SelectItem key={key} value={key}>
          {value}
        </SelectItem>
      ))}
    </Select>
  )
}

export default Selector