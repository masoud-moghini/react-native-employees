import React ,{Component} from 'react';
import {Card,CardSection,Input,Button, Spinner} from './common';
import {Text}from 'react-native';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux'
class LoginForm extends Component{
    onMailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }
    onPressButton(){
        console.log("on press button :",this.props)
        const{email,password}=this.props;
        this.props.loginUser({email,password});
    }
    renderButton(){
        if(this.props.loading)
        {
            return(
                <Spinner size="large"/>
            )
        }
        else{
            return(
                <Button onPress={this.onPressButton.bind(this)}>Login</Button>
            )
        }
    }
    render(){
        return (
        <Card>
            <CardSection>
                <Input
                    label="email"
                    placeholder="email@gmail.com"
                    onChangeText={this.onMailChange.bind(this)}
                    value={this.props.email}
                />
            </CardSection>
            <CardSection>
                <Input                
                    secureTextEntry
                    label="password"
                    placeholder="enter your password"
                    onChangeText={this.onPasswordChanged.bind(this)}
                    value={this.props.password}
               />
            </CardSection>
           <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            <CardSection>
               {this.renderButton()}                
            </CardSection>
             
        </Card>
        )        
    }
}

const styles={
    errorTextStyle:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
    }
}

const mapStateToProps=(state)=>{
    const{email,password,error,loading} = state.auth;
    return({
        email,
        password,
        error,
        loading
    })
}

export default connect(mapStateToProps,{
    emailChanged,passwordChanged,loginUser
})(LoginForm);