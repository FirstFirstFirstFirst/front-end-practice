import React from 'react'
import Summary from '@/../components/Summary';
import YourResult from '../../components/YourResult';

const resultsSum = () => {
  return (
    
    // THIS IS results-summary-component
    // FROM https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV
    
    <div className='flex flex-row'>
      <YourResult />
      <Summary />
      
    </div>
  )
}

export default resultsSum;