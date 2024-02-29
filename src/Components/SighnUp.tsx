import React, { ChangeEvent, FormEvent, useState } from 'react';
import './SignUp.css';


function SignUp() {
     const [firstNameValue,setFirstNameValue]= useState('')
     const [firstNameError,setFirstNameError]= useState('')
     const [lastNameValue,setLastNameValue]= useState('')
     const [lastNameError,setLastNameError]= useState('')
     const [emailValue,setEmailValue]= useState('')
     const [emailError,setEmailError]= useState('')
     const [passwordValue,setPasswordValue]= useState('')
     const [passwordError,setPasswordError]= useState('')
     const [passwordConfirmValue,setPasswordConfirmValue]= useState('')
     const [passwordConfirmError,setPasswordConfirmError]= useState('')
     const [checkBoxValue,setCheckBoxValue]= useState(false)
     const [checkBoxError,setCheckBoxError]= useState('')
     const [messageValue,setMessageValue]= useState('')
     const [Hide,setHide]= useState('')
     const handleFirstName=(event:ChangeEvent<HTMLInputElement>)=>{
        setFirstNameValue(event.target.value)
     }
     const handleLastName=(event:ChangeEvent<HTMLInputElement>)=>{
        setLastNameValue(event.target.value)
     }
     const handleEmail=(event:ChangeEvent<HTMLInputElement>)=>{
        setEmailValue(event.target.value)
     }
     const handlePassword=(event:ChangeEvent<HTMLInputElement>)=>{
        setPasswordValue(event.target.value)
     }
     const handlePasswordConfirm=(event:ChangeEvent<HTMLInputElement>)=>{
        setPasswordConfirmValue(event.target.value)
     }
     const handleCheckBox=(event:ChangeEvent<HTMLInputElement>)=>{
        setCheckBoxValue(event.target.checked)
     }
     const handleSubmit=(event:FormEvent)=>{
        event.preventDefault()
        var letters = /^[A-Za-z]+$/;
        var state = true
        if(firstNameValue.length<=15 && firstNameValue.match(letters)){
            setFirstNameError('')
            state=true
        }else{
            setFirstNameError('First name must have 15 characters max and not numbers') 
            state=false
        }
        if(lastNameValue.length<=15 && lastNameValue.match(letters)){
            setLastNameError('')
            state=true
        }else{
            setLastNameError('Last name must have 15 characters max and not numbers') 
            state=false
        }
        if(emailValue.match(/.+@.+/)){
            setEmailError('')
            state=true
        }else{
            setEmailError("Email must contain '@'")
            state=false
        }
        if(passwordValue.length>0){
            setPasswordError('')
            state=true
        }else{
            setPasswordError('Password field must not be empty')
            state=false
        }
        if(passwordConfirmValue === passwordValue){
            setPasswordConfirmError('')
            state=true
        }else{
            setPasswordConfirmError('You must enter the same pasword as the pasword field')
            state=false
        }
        if(checkBoxValue == true){
           setCheckBoxError('')
           state=true
        }else{
            setCheckBoxError('You must accept the terms and coditions to proceed')
            state=false 
        }
        if(state == true){
            setHide('none')
            setMessageValue('Thank you for joining us dear client')  
        }


     }
    return (
    <div>
     <form onSubmit={handleSubmit} style={{display:Hide}}>
      <h1>Create your account</h1>
      <span>Fill the form below to create an account</span>
      <div>
        <label className='flexLabel'> First name* <input type="text" className='Text' onChange={handleFirstName}/><p>{firstNameError}</p></label>
        <label className='flexLabel'>Last name* <input type="text" className='Text' onChange={handleLastName}/><p>{lastNameError}</p></label>
      </div>
      <div>
        <label className='flexLabel'>Email* <input type="email" className='Text Email' onChange={handleEmail}/><p>{emailError}</p></label>
      </div>
      <div>
        <label className='flexLabel'>Password* <input type="password" className='Text' onChange={handlePassword}/><p>{passwordError}</p></label>
        <label className='flexLabel'>Password confirmation* <input type="password" className='Text' onChange={handlePasswordConfirm}/><p>{passwordConfirmError}</p></label>
      </div>
      <div className='termSection'>
        <span>We want you to know exactly how our service works and why we need your details</span>
        <span>Please confirm that you have read, understood and accept the terms and conditions</span>
        <span className='termsCheck'><input type="checkbox" onChange={handleCheckBox}/> I have read, understood and accept terms and conditions</span>
        <p>{checkBoxError}</p>
      </div>
      <button type="submit" className='Button'>Next</button>
     </form>
     <h1>{messageValue}</h1>
     </div>

        

    
   
  );
}

export default SignUp;