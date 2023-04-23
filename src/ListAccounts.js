import React, {useEffect, useState} from 'react';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';

function ListAccounts() {
   const [allAccounts, setAllAccounts]=useState([]);
      useEffect(() => {
      axios.get('http://localhost:8080/api/students')
          .then((response)=>setAllAccounts(response.data))
          .catch((error) => console.log(error));
  },[]);
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First name', width: 130, sortable: false,},
        {field: 'middleName', headerName: 'Middle name', width: 130},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {field: 'gradeLevel', headerName: 'GradeLevel', width: 130},
        {field: 'address', headerName: 'Address', width: 130},
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'phoneNumber', headerName: 'Phone Number', width: 130},
        {field: 'birthPlace', headerName: 'BirtPlace', width: 130},
        {field: 'dateOfBirth', headerName: 'Date of Birth', width: 130}, //, valueGetter: (params) => `${'*'.repeat(params.row.pin..toString().length)}`},
    ];

   return(
        <div style={{height: 400, width: '100%', marginTop: '30px'}}>
            <DataGrid
                columns={columns}
                rows={allAccounts}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
    </div>


  );
}
export default ListAccounts;
