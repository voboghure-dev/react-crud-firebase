import { useState } from 'react';

export default function ContactForm(props) {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
  };

  const [values, setValue] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    setValue(initialFieldValues);
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
          value='Save'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
}
