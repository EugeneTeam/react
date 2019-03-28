import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../css/Comment.css'
class CommentForm extends React.Component {
  id = null;
  componentWillMount() {
    this.id = this.props.index;
  }
  handleClick = (id, name) => () => {
    this.props.changeParentComment(id, name);
  }
  render() {
    return (
      <div>
        <div id='main-form' className='answer-name'>
          {this.props.name !== null ? "Reply to " + this.props.name : null}
          {this.props.name !== null ?
            <button style={{ fontSize: 10 }} onClick={this.handleClick(null, null)}>   Cancel</button>
            : null
          }
        </div>
        <Formik
          initialValues={{
            email: '',
            name: '',
            text: '',
            parent: null,
            articleId: -1,
            avatar: '/image/avatar/default avatar.png'
          }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
            }
            if (!values.name) {
              errors.name = 'Required';
            } else {
              if (!/^[A-Z0-9]{2,10}$/i.test(values.name)) {
                errors.name = 'Unacceptable symbols';
              }
            }
            if (!values.text) {
              errors.text = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            values.articleId = this.props.index;
            values.parent = this.props.parent;
            let form = document.forms[0];
            let input = form.elements.group1;
            input.forEach(n => {
              if (n.checked) {
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
              }).then(() => {
                fetch(`http://localhost:4000/article/${this.props.index}`, {
                  method: 'GET',
                  headers: new Headers()
                })
                  .then(response => response.json())
                  .then(data => {
                    this.props.changeData(data);
                    document.getElementById('reset').reset();
                    this.props.changeParentComment(null, null);
                  });
              }).catch(e => {
                console.log(e);
              })
              setSubmitting(false);
            }, 500);
          }}>
          {({ isSubmitting }) => (
            <Form id='reset'>
              <div className='main'>
                <ErrorMessage name="email" component="div" id='error' />
                <Field type="email" name="email" placeholder='E-Mail address' />
                <br />
                <ErrorMessage name="name" component="div" id='error' />
                <Field type="text" name="name" placeholder='Author name' />
                <br />
                <ErrorMessage name="text" component="div" id='error' />
                <Field type='text' name='text' placeholder='Message text' />
                <div>
                  <fieldset>
                    <label>
                      <img src='/image/avatar/1.png' alt='' className='image' />
                      <Field type='radio' value='/image/avatar/1.png' name="group1" />
                      <label></label>
                    </label>
                    <label>
                      <img src='/image/avatar/2.png' alt='' className='image' />
                      <Field type='radio' value='/image/avatar/2.png' name="group1" />
                      <label></label>
                    </label>
                    <label>
                      <img src='/image/avatar/3.png' alt='' className='image' />
                      <Field type='radio' value='/image/avatar/3.png' name="group1" />
                      <label></label>
                    </label>
                    <br />
                    <label>
                      <img src='/image/avatar/4.png' alt='' className='image' />
                      <Field type='radio' value='/image/avatar/4.png' name="group1" />
                      <label></label>
                    </label>
                    <label>
                      <img src='/image/avatar/5.png' alt='' className='image' />
                      <Field type='radio' value='/image/avatar/5.png' name="group1" />
                      <label></label>
                    </label>
                    <label>
                      <img src='/image/avatar/6.png' alt='' className='image' />
                      <Field type='radio' value='/image/avatar/6.png' name="group1" />
                      <label></label>
                    </label>
                  </fieldset>
                </div>
                <br />
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