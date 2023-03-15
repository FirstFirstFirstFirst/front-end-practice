import React from 'react'
import NotificationBar from '@/../components/NotificationBar';
import UsersNotification from '@/../components/UsersNotification';

const notiPage = () => {
  return (
    
    //THIS IS notifications-page
    //FROM https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC

    <div className='flex flex-col justify-center items-center'>
      <NotificationBar />
      <UsersNotification />
    </div>
  )
}

export default notiPage;