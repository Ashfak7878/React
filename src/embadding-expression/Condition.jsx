import React from 'react'

const Condition = () => {

    const isLoggedIn = false;

  return (
    <div>
      <p>{isLoggedIn ? 'welcome back':'please login'}</p>
    </div>
  )
}

export default Condition
