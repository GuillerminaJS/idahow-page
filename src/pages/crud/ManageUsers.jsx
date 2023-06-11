// React stuff & imports
import React from 'react';
// ...

// Other imports
import FormUsers from '../../components/forms & lists/users/FormUsers';
import AdminNav from '../../components/forms & lists/AdminNav';
// ...

const ManageUsers = () => {
  return (
    <>
      <AdminNav/>
      <main>
        
          <FormUsers/>
      </main>
    </>
    
  )
}

export default ManageUsers