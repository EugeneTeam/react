import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import './Comment.css'

class Comment extends React.Component{
  constructor() {
    super();
    this.id = null;
  }
  componentWillMount() {
    this.id = this.props.index;
  }
    render() {
        return(
            <div>
    <Formik
      initialValues={{ email: '', name: '', text: '', parent: null, article_id: -1}}
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
        values.article_id = this.props.index;
        setTimeout(() => {
            fetch(`http://localhost:4000/comment`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(values, null, 2)
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
              <div>
                <fieldset>
                  <label>
                    <div className='avatar1'></div>
                    <Field type='radio' value='1' name="group1" checked/>
                  </label>
                  <label><Field type='radio' value='2' name="group1" className='av2'/></label>
                  <label><Field type='radio' value='3' name="group1" className='av3'/></label>
                  <br></br>
                  <label><Field type='radio' value='4' name="group1" className='av4'/></label>
                  <label><Field type='radio' value='5' name="group1" className='av5'/></label>
                  <label><Field type='radio' value='6' name="group1" className='av6'/></label>
                </fieldset>
              </div>
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