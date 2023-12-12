import { ReactDOM, useEffect } from 'react';
import '../Asset/form.css';
import { useState } from 'react';
import { Button } from 'bootstrap';
import DataTable from 'react-data-table-component';
import { Link, useNavigate } from 'react-router-dom';
import { deletePatientData } from '../utils/functions';
//import { editPatientData } from '../utils/functions';




function Display() {

  // const[country,setCountry]=useState();
  // const[state,setState]=useState();
  // const[states,setStates]=useState([]);

  // const changeCountry=(event)=>{
  //     setCountry(event.target.value);
  //     setStates(countries.find(ctrs=>ctrs.name===event.target.value).states)
  // }
  // const changeState=(event)=>{
  //     setState(event.target.value);
  // }


  // const[fullname,setFullname]=useState();
  // const[address,setAddress]=useState();
  // const[email,setEmail]=useState();
  // const[gender,setGender]=useState();
  // const[dob,setDob]=useState();
  // const[note,setNote]=useState();
  // const[mobile,setMobile]=useState();
  // const[ref,setRef]=useState();

  // const[data,setData]=useState();
  // const details={
  //   fullanme:fullname,
  //   gender:gender,
  //   dob:dob,
  //   ref:ref,
  //   address:address,
  //   country:country,
  //   state:state,
  //   mobile:mobile,
  //   email:email,
  //   note:note
  // }





  // function id() {
  //   id += 1;
  //   return id;
  // }
  //  var ids = id();
  // const get = JSON.stringify(localStorage.getItem(`patient${ids}`))
  // const setUs = ([get]);

  // function Showdata(event) {
  //   var id = 1;
  //   event.preventDefault();
  //   var get = JSON.stringify(localStorage.getItem(`patient${ids}`))
  //   var setUs = ([get]);
  //   id++;
  // }
  const navigate=useNavigate();
  function editPatientData(pid){
     
  console.log(' called from edit pid:',pid);
  const data=(JSON.parse(localStorage.getItem('PatientDetails')));
  
  var index;  
  data.findIndex(function (entry, i) { 
      if (entry.pid == (pid)) { 
          index = i; 
          return true; 
      } 
  });
  const firstValue = Object.values(data)[index];
  handleClick(firstValue);
    function handleClick(data) {
      navigate("/");
      debugger;

    // document.getElementById('name')?.value = data?.fullname;
    // document.getElementById('gender')?.value = data?.gender;
    // document.getElementById('dob')?.value = data?.dob;
    }
    
    
  }


  var n=0;

  const columns = [
    {
      name: 'Id',
      selector: row => row.pid,
    },
    {
      name: 'Name',
      selector: row => row.fullname,
    },
    {
      name: 'Gender',
      selector: row => row.gender,
    },
    {
      name: 'DOB',
      selector: row => row.dob,
    },
    {
      name: 'Ref. Doctor',
      selector: row => row.ref,
    },
    {
      name: 'Address',
      selector: row => row.address,
    },
    {
      name: 'Country',
      selector: row => row.country,
    },
    {
      name: 'State',
      selector: row => row.state,
    },
    {
      name: 'Mobile',
      selector: row => row.mobile,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Note',
      selector: row => row.note,
    },
    {
      name: 'Action',
      selector: row => {
        
        return <button className='btn btn-primary'  onClick={() => editPatientData(row.pid)}>edit</button>
      },
    },
    {
      name: 'Action',
      selector: row => {
        return <button className='btn btn-danger'  onClick={() => deletePatientData(row.pid)}>delete</button>
      }
    },
  ];
  // const data = [{},]
  //n++; //first block
var det;
  // const kvk=JSON.parse(localStorage.getItem('patient1'))

  // console.log('kvk',kvk);
  // Object.keys(localStorage).forEach(key =>{
  //    det=JSON.parse(localStorage.getItem(key));
  //   console.log('det data:',det);
  // });
  // console.log('object.keys=',Object.keys(localStorage));
  // const data=Object.keys(localStorage);
//const data=Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
const data=(JSON.parse(localStorage.getItem('PatientDetails')));

  console.log("data after obj.key",data);
  console.log(typeof(data));
  console.log(data);


 debugger;
  // Object.keys(localStorage).forEach(key => {
  //   console.log('inside object.key',key);
  //   const det=localStorage.getItem(key);
  //   console.log('det data:',det);
  //   const obj=JSON.parse(det);
  //   console.log('det data after parse obj:',obj);
  //   console.log('obj[0]:',obj[0]);
  //   const data = [
  //     {
  //       id: key,
  //       name: obj[0].fullname,
  //       gender:obj[0].gender,
  //       dob:obj[0].dob,
  //       ref: obj[0].ref,
  //       address:obj[0].address,
  //       country:obj[0].country,
  //       state:obj[0].state,
  //       mobile:obj[0].mobile,
  //       email:obj[0].email,
  //       note:obj[0].note,
  //     }]
  //const data = obj[0].fullname;
 
  // console.log("cbdhdbc",data1)
  //   console.log(`${key} - ${localStorage.getItem(key)}`);
  // });
   


//   const data = [
//     {
//       "fullname": "xy",
//       "gender": "female",
//       "dob": "2023-12-30",
//       "ref": "Dr.2",
//       "address": "xy",
//       "country": "India",
//       "state": "Goa",
//       "mobile": "1",
//       "email": "xy",
//       "note": "xy"
//   }
// ]
useEffect(()=>
{
  console.log('table data:',data);
})
  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      {/*---- Include the above in your HEAD tag --------*/}
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Fonts */}
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300,400,600"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="icon" href="Favicon.png" />
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <title></title>
      <nav className="navbar navbar-expand-lg navbar-light navbar-laravel">
        <div className="container">
          <a className="navbar-brand" href="#">
            Task No. 1
          </a>
          {/* <div style={{height:'150ph',display:'grid',justifyContent:'left'}}>
        <input type='image' style={{height:'150px'}}>
        </input>
      </div> */}
          {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link to='/'>Registration
              </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">

                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="my-form" style={{ display: 'flex' }}>
        <div className="container" style={{ display: '' }}>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card" style={{ display: '' }}>
                <div className="card-header">Registration Details</div>
                <div className="card-body">
                 
                  <DataTable columns={columns}
                    
                    data={data}>

                  </DataTable>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Display;


