import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import './Comment.css'

class Comment extends React.Component{
    render() {
        return(
            <div>
    <Formik
      initialValues={{ email: '', name: '', text: ''}}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

        if (!values.name) {
            errors.name = 'Required';
        } else
            if(!/^[A-Z0-9]{2,10}$/i.test(values.name)) {
                errors.name ='Unacceptable symbols';
            }

        if (!values.text) {
            errors.text = 'Required';
        }
        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            fetch(`http://localhost:4000/comment`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(values, null, 2)
            }).then((res) => {
                
            }).then((res1) => {
                
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='main'>
              <ErrorMessage name="email" component="div" id='error' />
              <Field type="email" name="email" placeholder='E-Mail address'/>
              <br></br>
              <ErrorMessage name="name" component="div" id='error' />
              <Field type="text" name="name" placeholder='Author name'/>
              <br></br>
              <ErrorMessage name="text" component="div" id='error' />
              <Field type='text' name='text' placeholder='Message text' />
              <br></br>
              <button type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
        )
    }
}

export default Comment;