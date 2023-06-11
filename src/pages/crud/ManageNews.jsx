// React stuff & imports
import React from 'react';
// ...

// Other imports
import FormNews from '../../components/forms & lists/news/FormNews';
import AdminNav from '../../components/forms & lists/AdminNav';
// ...

const ManageNews = () => {
  return (
    <>
      <AdminNav/>
      <main>
        <FormNews/>
      </main>
    </>
  )
}

export default ManageNews