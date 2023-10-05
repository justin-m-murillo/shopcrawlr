import { resultsListStyles } from './styles';
import { PageResult } from '@/types'
import React from 'react'
import MainBody from './MainBody';
import SideBar from './SideBar';

export type ResultsListProps = {
  results: PageResult[];
  term: string;
}

const ResultsList = ({ results, term }: ResultsListProps) => {
  return (
    <div className={resultsListStyles.results_list_root}>
      {/** sidebar */}
      <SideBar results={results} />

      {/** main body */}
      <MainBody results={results} term={term} />
    </div>
  )
}

export default ResultsList