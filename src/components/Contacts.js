import ContactForm from './ContactForm';
import db from '../firebase';
import { ref, set, push, update, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function Contacts() {
  const [contactObj, setContactObj] = useState({});
  const [currentId, setCurrentId] = useState('');

  const addOrEdit = (obj) => {
    if (currentId == '') {
      set(push(ref(db, 'contacts')), obj);
    } else {
      set(ref(db, `contacts/${currentId}`), obj);
    }
    setCurrentId('');
  };

  const onDelete = (id) => {
    if (window.confirm('Are you sure to delete this record?')) {
      set(ref(db, `contacts/${id}`), null);
    }
  };

  useEffect(() => {
    onValue(ref(db, 'contacts'), (snapshot) => {
      if (snapshot.val() != null) {
        setContactObj({
          ...snapshot.val(),
        });
      } else {
        setContactObj({});
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
          <ContactForm {...{ addOrEdit, currentId, contactObj }} />
        </div>
        <div className='col-md-7'>
          <table className='table table-borderless table-stripped'>
            <thead className='thead-light'>
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObj).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObj[id].fullName}</td>
                    <td>{contactObj[id].mobile}</td>
                    <td>{contactObj[id].email}</td>
                    <td className='text-center'>
                      <span
                        className='btn text-primary'
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className='fas fa-pencil-alt'></i>
                      </span>
                      <span
                        className='btn text-danger'
                        onClick={() => onDelete(id)}
                      >
                        <i className='far fa-trash-alt'></i>
                      </span>
                    </td>
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
