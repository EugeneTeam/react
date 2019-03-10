import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import './AddArticle.css'
class AddArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            file: null
          }
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {

    }

    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return(
            <div clas='form'>
                <Formik 
                    initialValues={{text:'', title:'', image:''}}
                    validate={function(values) {
                        let errors = {};
                        if(!values.text)
                            errors.text = 'Required';
                        if(!values.title)
                            errors.title = 'Required';
                    }}

                    onSubmit={(value, { setSubmitting }) => {
                        setTimeout(() => {
                            fetch(`http://localhost:4000/addarticle`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json, text/plain, */*',
                                    'Content-Type': 'application/json'
                                },
                                mode: 'cors',
                                body: JSON.stringify(value, null, 2)
                            });
                          setSubmitting(false);
                        }, 500);
                    }}
                >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="title" placeholder='Title' className='title'/>
                        <br></br>
                        <Field type='file' value='' accept="image/*" className='file' onChange={this.handleChange}/>
                        <br></br>
                        <textarea placeholder='Article' className='text'></textarea>
                        <br></br>
                        <button type="submit" disabled={isSubmitting} className='btn1'>Submit</button>
                        <button type="submit" className='btn1'>Preview</button>
                    </Form>
                )}
                </Formik>
            </div>
        )
    }
}

export default AddArticle;