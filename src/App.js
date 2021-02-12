import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth , createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   };
  // }// After adding react redux connect

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});
      // console.log(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          
          //this.setState({
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          });
          
        });
       
      }else{
        setCurrentUser(userAuth);
      }
     

    });
     
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route   exact path="/" component={Homepage}></Route>
          <Route   path="/shop" component={ShopPage}></Route>
          <Route   path="/sign-in" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage/>}></Route>
        </Switch>
       
      
     
      </div>
    );
  }
 
 
}

const mapStatetoProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
