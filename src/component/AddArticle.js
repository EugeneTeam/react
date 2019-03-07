import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';

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
            <div>
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
                        <Field type="text" name="title" placeholder='Title'/>
                        <br></br>
                        <Field type='file' value='' accept="image/*" onChange={this.handleChange}/>
                        <br></br>
                        <textarea placeholder='Article'></textarea>
                        <br></br>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                        <button type="submit" >Preview</button>
                    </Form>
                )}
                </Formik>
            </div>
        )
    }
}

export default AddArticle;