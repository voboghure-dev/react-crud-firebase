import ContactForm from './ContactForm';
import database from '../firebase';

export default function Contacts() {
  const addOrEdit = (obj) => {
    database.child('contacts').push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

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
          <div>List of contacts</div>
        </div>
      </div>
    </>
  );
}
