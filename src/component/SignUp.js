import React from 'react'

class SignUp extends React.Component {
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