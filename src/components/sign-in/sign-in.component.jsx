import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '', 
            password: ''
        }
    }

     handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '',
        password: ''});
    
           
    }

    handleChange = event => {
        // console.log(event.target.value);
        // if(event.target.name == 'email'){
        //     this.state.email = event.target.value;
        // }
        // else if(event.target.name == 'password'){
        //     this.state.password = event.target.value;
        // }
        // console.log(this.state.password);
        const {value, name} = event.target;
        this.setState ({[name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange}  required={true} label="Email"/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange}  required={true} label="Password"/>
                    {/* <input type="submit" value="Submit Form"/>
                     */}
                     <div className="buttons">
                        <CustomButton value="Sign In" type="submit"></CustomButton>
                        <CustomButton value="Sign In with Google" handleClick={signInWithGoogle} isGoogleSignIn></CustomButton>
                     </div>
                     
                    
                     
                    
                </form>
            </div>
        )
    }

}

export default SignIn;