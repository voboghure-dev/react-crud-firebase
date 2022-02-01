import { useEffect, useState } from 'react';

export default function ContactForm(props) {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
  };

  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == '') {
      setValues({
        ...initialFieldValues,
      });
    } else {
      setValues({
        ...props.contactObj[props.currentId],
      });
    }
  }, [props.currentId, props.contactObj]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    setValues(initialFieldValues);
  };

  return (
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <div className='input-group flex-nowrap'>
        <span className='input-group-text' id='addon-wrapping'>
          <i className='fas fa-user'></i>
        </span>
        <input
          type='text'
          className='form-control'
          placeholder='Full Name'
          name='fullName'
          value={values.fullName}
          onChange={handleInputChange}
          aria-label='Full Name'
        />
      </div>
      <div className='row mt-3'>
        <div className='col col-md-6'>
          <div className='input-group flex-nowrap col-md-6'>
            <span className='input-group-text' id='addon-wrapping'>
              <i className='fas fa-mobile-alt'></i>
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='Mobile'
              name='mobile'
              value={values.mobile}
              onChange={handleInputChange}
              aria-label='Mobile'
            />
          </div>
        </div>
        <div className='col col-md-6'>
          <div className='input-group flex-nowrap'>
            <span className='input-group-text' id='addon-wrapping'>
              <i className='fas fa-envelope'></i>
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='Email'
              name='email'
              value={values.email}
              onChange={handleInputChange}
              aria-label='Email'
            />
          </div>
        </div>
      </div>
      <div className='input-group flex-nowrap mt-3'>
        <textarea
          type='text'
          className='form-control'
          placeholder='Address'
          name='address'
          value={values.address}
          onChange={handleInputChange}
          aria-label='Address'
        ></textarea>
      </div>
      <div className='input-group flex-nowrap mt-3'>
        <input
          type='submit'
          value={props.currentId == '' ? 'Save' : 'Update'}
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
}
