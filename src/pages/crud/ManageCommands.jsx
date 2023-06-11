// React stuff & imports
import React from 'react';
// ...

// Other imports
import FormCommands from '../../components/forms & lists/commands/FormCommands';
import AdminNav from '../../components/forms & lists/AdminNav';
// ...
const ManageCommands = () => {
  return (
    <>
      <AdminNav/>
      <main>
        <FormCommands/>
      </main>
    </>
  )
}

export default ManageCommands