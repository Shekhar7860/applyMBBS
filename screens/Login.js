import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image,KeyboardAvoidingView,  ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from './styles.js';
import firebase from 'react-native-firebase';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
import Icon from 'react-native-vector-icons/FontAwesome';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');
export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300
    }
    
  }

  signUp = () =>{
    this.setState(() => ({ cardheight:370}));
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({ passwordError: " Password is required."}));
    } else {
      this.setState(() => ({ passwordError: null}));
    }
    if (this.state.mobile.trim() === "") {
      this.setState(() => ({ mobileError: " Mobile Number is required."}));
    } else {
      this.setState(() => ({ mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === "") {
      this.setState(() => ({ confirmPasswordError: " Confirm Password is required."}));
    } else {
      this.setState(() => ({ confirmPasswordError: null}));
    }
    if(this.state.email && this.state.mobile && this.state.password && this.state.confirmPassword)
    {
      this.setState(() => ({ cardheight:300}));
    }

    if(this.state.email && this.state.password && this.state.mobile && this.state.confirmPassword && service.validateEmail(this.state.email))
    {
      
     this.setState ({ loading: true});
      setTimeout(() => 
      {this.setState({loading: false})
      this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
      this.props.navigation.navigate('Login')
       }, 3000)
      }

  
   // alert(this.state.password)
   }
  goBack = () =>{
    this.props.navigation.pop()
   }

   forgotpassword = () => 
   {
    this.props.navigation.navigate('forgot')
   }
   submit = () => {
       if (this.state.email && this.state.password)
       {
           alert("logging in")
       }
       else
       {
           alert("please enter email and password both")
       }
   }
  render() {
    return (
    
    
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
    
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Login</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
              
                <Image style={{width:250, height:150, marginLeft:5, marginTop:20, alignSelf:'center'}}source={require('../images/splash2.png')}></Image>
                
                <View style={{ marginTop:20, alignItems:'center' }}>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/email1.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email Address"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                </View>

                

     <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/password.png')}></Image>
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                </View>

                  
 
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={() => this.submit()}>Submit</Text>
                </TouchableOpacity>

                 <TouchableOpacity  onPress={() => this.forgotpassword()}><Text style={{fontSize:20, color:'#588029'}}>Forgot Password ?</Text></TouchableOpacity>
                </View>

 <View style={styles.footer}>
       <Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-2457999726327943/3435901721"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
  </View>
           

      </KeyboardAvoidingView>
      
    );
}


}