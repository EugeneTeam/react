import React from 'react'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        // this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
      }
    render() {
        return(
            <div className='signup'>
                <div className='sign'>Sign up for our newsletter!</div>
                <div className='scolor'>
                    <form>
                        <input type='text' onChange={this.handleChange} value='' className='inpute' placeholder="Enter a valid email address"></input>
                        <input type='submit' value='>' className='btn'></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;