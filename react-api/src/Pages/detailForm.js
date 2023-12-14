import { ReactDOM, useEffect } from 'react';
import '../Asset/form.css';
import { useState } from 'react';
//import { Button } from 'bootstrap';
import DataTable from 'react-data-table-component';
import { Link, useNavigate } from 'react-router-dom';
import { deletePatientData } from '../utils/functions';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { editPatientData } from '../utils/functions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl } from '@mui/material';
var oldpid,oldimage;
// import Form, {
//   Input,
//   Select,
//   SubmitButton,
// } from 'react-form-component'






const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  height: '100%'
};


function Display() {

  const [fullname, setFullname] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [note, setNote] = useState();
  const [mobile, setMobile] = useState();
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValue,setFormValue]=useState('');
  const doc = ['select Dr.', 'Dr.1', 'Dr.2', 'Dr.3'];
  const countrie = ['select country', 'Germany', 'India', 'France']
  const gstate = ['select state', 'Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']
  const istate = ['select state', 'MH', 'Goa', 'MP', 'Delhi']
  const fstate = ['select state', 'Auvergne', 'Bretagne', 'Corse', 'Centre']
  const [cdata, setName] = useState({countrie: "", state: ""});
  const [ref, setRef] = useState({doc: ""});
  const navigate = useNavigate();
  let state;
  
  if (cdata.countrie === "Germany") {
    state = gstate.map((gstate, key) => <option key={key} value={gstate}>{gstate}</option>)
  }
  else if (cdata.countrie === "India") {
    state = istate.map((istate, key) => <option key={key} value={istate}>{istate}</option>)
  }
  else {
    state = fstate.map((fstate, key) => <option key={key} value={fstate}>{fstate}</option>)
  }
  const countries = countrie.map((countrie, key) => <option key={key} value={countrie}>{countrie}</option>);
  const docs = doc.map((doc, key) => <option key={key} value={doc}>{doc}</option>);
  function handleCountry(e) {
    setName({ ...cdata, countrie: e.target.value });
  }

  function handleStateChange(e) {
    setName({ ...cdata, state: e.target.value });
  }


  function handleRefChange(e) {
    setRef({ ...ref, doc: e.target.value });
  }
  
  function editPatientData(pid,event) {
    debugger;
    console.log('pid',pid);
    oldpid=pid;
    console.log(' called from edit pid:', oldpid);
    const data = (JSON.parse(localStorage.getItem('PatientDetails')));

    var index;
    data.findIndex(function (entry, i) {
      if (entry.pid == (pid)) {
        index = i;
        return true;
      }
    });

    const firstValue = Object.values(data)[index];
    oldimage=firstValue.image;
    console.log("fetched data",firstValue);
    console.log("fetched data fullname:",firstValue.fullname);
    
    setFormValue(firstValue);
    console.log('formValue type:',typeof(formValue));
    console.log('formValue dob:',formValue.dob);
    handleOpen();

  }

  function editData(event){
    debugger;
    
    
    const data=(JSON.parse(localStorage.getItem('PatientDetails')));
    var index; 
    data.findIndex(function (entry, i) { 
      if (entry.pid == (oldpid)) { 
          index = i; 
          return true; 
      } 
  });
    var splcdData=data.splice(index,oldpid);
    const isEmpty=data.lenght;
    console.log('object empty',isEmpty);
    const details = {
      pid: oldpid,
      fullname: fullname,
      gender: gender,
      dob: dob,
      ref: ref.doc,
      address: address,
      country: cdata.countrie,
      state: cdata.state,
      mobile: mobile,
      email: email,
      note: note,
      image: oldimage,
    };
    if(isEmpty){
      localStorage.setItem('PatientDetails', JSON.stringify(details));
    }
    else{
      data.append(details);
      var array = JSON.parse(localStorage.getItem('PatientDetails') || '[]');
    array.push(details);
  localStorage.setItem('PatientDetails', JSON.stringify(array));
  alert('Data saved successfully...');
    }
    
    
    
    
    

    
 
 


 
 



    
    handleClose();
  }



  var n = 0;

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

        return <button className='btn btn-primary' onClick={() => editPatientData(row.pid)}>edit</button>
      },
    },
    {
      name: 'Action',
      selector: row => {
        return <button className='btn btn-danger' onClick={() => deletePatientData(row.pid)}>delete</button>
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
  const data = (JSON.parse(localStorage.getItem('PatientDetails')));

  console.log("data after obj.key", data);
  console.log(typeof (data));
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
  useEffect(() => {
    console.log('table data:', data);
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
            Patient Screen
          </a>
          
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
                  <div>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          timeout: 500,
                        },
                      }}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <Form>
                            <Form.Group className="mb-3" controlId="fullname">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" placeholder="" value={formValue.fullname} onChange={(event) => (setFormValue(event.target.value),setFullname(event.target.value))} name='fullname' />
                            </Form.Group>
                            <Form.Select aria-label="Default select example" controlId="gender" value={formValue} onChange={(event) => (setFormValue(event.target.value),setGender(event.target.value))}>
                              <option>Gender</option>
                              <option value={formValue}>Male</option>
                              <option value={formValue}>Female</option>
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="dob">
                              <Form.Label>DOB</Form.Label>
                              <Form.Control type="date" placeholder="" value={formValue.dob} name='dob'onChange={(event) => (setFormValue(event.target.value),setDob(event.target.value))}/>
                            </Form.Group>
                            <Form.Select aria-label="Default select example" controlId="refdoc" value={ref.doc} onChange={handleRefChange}>
                            {docs}
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="address">
                              <Form.Label>Address</Form.Label>
                              <Form.Control type="text" placeholder="" name='address' value={formValue.address} onChange={(event) => (setFormValue(event.target.value),setAddress(event.target.value))}/>
                            </Form.Group>
                            <Form.Select aria-label="Default select example" controlId="country" value={cdata.countrie} onChange={handleCountry} >
                            {countries}
                            </Form.Select>
                            <Form.Select aria-label="Default select example" controlId="state" value={cdata.state} onChange={handleStateChange}>
                            
                          {state}
                        
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="mobile">
                              <Form.Label>Mobile</Form.Label>
                              <Form.Control type="text" placeholder=""  value={formValue.mobile} name='mobile' onChange={(event) => (setFormValue(event.target.value),setMobile(event.target.value))}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="" value={formValue.email} name='email'onChange={(event) => (setFormValue(event.target.value),setEmail(event.target.value))}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="note">
                              <Form.Label>Note</Form.Label>
                              <Form.Control type="text" placeholder="" value={formValue.note} name='note'onChange={(event) => (setFormValue(event.target.value),setNote(event.target.value))}/>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={editData}>
                              Submit
                            </Button>
                          </Form>
                          {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
                        </Box>
                      </Fade>
                    </Modal>
                  </div>
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