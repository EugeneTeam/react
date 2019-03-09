import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import '../Comment.css'

class CommentForm extends React.Component{
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
              <div className='answer-name'>{this.props.name?"Reply to " + this.props.name:""}</div>
            <Formik
              initialValues={{ email: '', name: '', text: '', parent: null, article_id: -1, avatar: '/image/avatar/default avatar.png'}}
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
                values.parent = this.props.parent;
                
                let form = document.forms[0];
                let input = form.elements.group1;

                input.forEach(n => {
                  if(n.checked) {
                    values.avatar = n.value;
                  }
                });
                
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
                            <img src='/image/avatar/1.png' className='image'/>
                            <Field type='radio' value='/image/avatar/1.png' name="group1"/>
                            <label></label>
                          </label>
                          <label>
                            <img src='/image/avatar/2.png' className='image'/>
                            <Field type='radio' value='/image/avatar/2.png' name="group1"/>
                            <label></label>
                          </label>
                          <label>
                            <img src='/image/avatar/3.png' className='image'/>
                            <Field type='radio' value='/image/avatar/3.png' name="group1"/>
                            <label></label>
                          </label>
                            <br></br>
                            <label>
                            <img src='/image/avatar/4.png' className='image'/>
                            <Field type='radio' value='/image/avatar/4.png' name="group1"/>
                            <label></label>
                          </label>
                          <label>
                            <img src='/image/avatar/5.png' className='image'/>
                            <Field type='radio' value='/image/avatar/5.png' name="group1"/>
                            <label></label>
                          </label>
                          <label>
                            <img src='/image/avatar/6.png' className='image'/>
                            <Field type='radio' value='/image/avatar/6.png' name="group1"/>
                            <label></label>
                          </label>
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

export default CommentForm;
