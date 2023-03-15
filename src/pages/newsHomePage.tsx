import React from 'react'
import NewsPageNavBar from '../../components/NewsPageNavBar';
import NewsPage from '@/../components/NewsPage';

const newsHomePage = () => {
  return (
    
//    THIS IS news-homepage
//    FROM https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl
    
    <div className='mx-32 my-16 body-font font-inter'>
        <NewsPageNavBar />
        <NewsPage />
    </div>
)
}

export default newsHomePage;