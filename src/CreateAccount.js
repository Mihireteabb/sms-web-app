import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {useEffect, useState} from 'react';
import axios from "axios";
function CreateAccount() {
    const  [firstName, setFirstName]=useState('');
    const  [middleName, setMiddleName]=useState('');
    const  [lastName, setLastName]=useState('');
    const  [gradeLevel, setGradeLevel]=useState('');
    const  [address, setAddress]=useState('');
    const  [email, setEmail]=useState('');
    const  [phoneNumber, setPhoneNumber]=useState('');
    const  [birthPlace, setBirthPlace]=useState('');
    const  [dateOfBirth, setDateOfBirth]=useState('');
    const [isReadyToSubmit, setIsReadyToSubmit]=useState(false);
   useEffect(() => {
       if (isReadyToSubmit===true) {
           console.log(`ready for api call`);
           //TODO: replace with actual date picker
           setDateOfBirth('1990-01-01');
        axios.post('http://localhost:8080/api/students',{
            firstName:firstName,
            middleName:middleName,
            lastName:lastName,
            gradeLevel:gradeLevel,
            address:address,
            email:email,
            phoneNumber:phoneNumber,
            birthPlace:birthPlace,
            dateOfBirth:dateOfBirth

           })
            .then(function (response) {
                console.log(response);
                alert(`Account with ID ${response.data.id} is created successfully.`);
            })
            .catch(function (error) {
                console.log(error);
                alert(`Error happened ${error}`);
            });
       }
       setIsReadyToSubmit(false);
       },[isReadyToSubmit, firstName, middleName, lastName, gradeLevel, address, email,phoneNumber, birthPlace, dateOfBirth]);

   return(
    <div>
        <p>HELLO Student!</p>
        <p>Fill The Following Registration Form </p>
        <div>
            <TextField variant="outlined" placeholder="First Name"
                       value={firstName}
                       onChange={(event)=> setFirstName(event.target.value)}/>
            <TextField variant="outlined" placeholder="Middle Name"
                       value={middleName}
                       onChange={(event)=> setMiddleName(event.target.value)}/>
            <TextField variant="outlined" placeholder="Last Name"
                       value={lastName}
                       onChange={(event)=> setLastName(event.target.value)}/>
            <TextField variant="outlined" placeholder="Grade"
                       value={gradeLevel}
                       onChange={(event)=> setGradeLevel(event.target.value)}/>
            <TextField variant="outlined" placeholder="Address/city"
                       value={address}
                       onChange={(event)=> setAddress(event.target.value)}/>
            <TextField variant="outlined" placeholder="email"
                       value={email}
                       onChange={(event)=> setEmail(event.target.value)}/>
            <TextField variant="outlined" placeholder="Phone Number"
                       value={phoneNumber}
                       onChange={(event)=> setPhoneNumber(event.target.value)}/>
            <TextField variant="outlined" placeholder="Birth Place"
                       value={birthPlace}
                       onChange={(event)=> setBirthPlace(event.target.value)}/>
        </div>
        <div>
            <Button variant="contained" onClick={()=>setIsReadyToSubmit(true)}>Register</Button>
        </div>

    </div>


  );
}
export default CreateAccount;
