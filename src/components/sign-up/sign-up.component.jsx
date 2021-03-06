import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password != confirmPassword){
            alert("Passwords don't match !!!");
            return;
        }

       try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        // console.log("user print" , user);

        await createUserProfileDocument(user, {displayName});

        this.setState ({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '' 
        
        });
           

       }catch(error){
           console.error(error);
       }
    }

    handleChange = (event) => {
        const{value, name} = event.target;
        this.setState({
            [name] : value
        });
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} handleChange={this.handleChange} required label="Username"></FormInput>
                    <FormInput type="email" name="email" value={email} handleChange={this.handleChange} required label="Email"></FormInput>
                    <FormInput type="password" name="password" value={password} handleChange={this.handleChange} required label="Password"></FormInput>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} handleChange={this.handleChange} required label="Confirm Password"></FormInput>
                    <CustomButton value="Sign Up" type="submit"></CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;