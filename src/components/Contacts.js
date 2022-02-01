import ContactForm from './ContactForm';
import db from '../firebase';
import { ref, set, push, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function Contacts() {
  const [contactObj, setContactObj] = useState({});

  const addOrEdit = (obj) => {
    set(push(ref(db, 'contacts')), obj);
  };

  useEffect(() => {
    onValue(ref(db, 'contacts'), (snapshot) => {
      if (snapshot.val() != null) {
        setContactObj({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  return (
    <>
      <div className='p-5 mb-4 bg-light rounded-3'>
        <div className='container-fluid py-5'>
          <h1 className='display-5 fw-bold text-center'>Contact Register</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
          <ContactForm addOrEdit={addOrEdit} />
        </div>
        <div className='col-md-7'>
          <table className='table table-borderless table-stripped'>
            <thead className='thead-light'>
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObj).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObj[id].fullName}</td>
                    <td>{contactObj[id].mobile}</td>
                    <td>{contactObj[id].email}</td>
                    <td>Edit | Delete</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
