import { ReactDOM } from 'react';
import '../Asset/form.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

var id=0;




function Form(){

  
  const[cdata, setName] = useState({
    countrie:"",
    state:""
  });

  const[ref,setRef]=useState({
    doc:""
  });

  const doc =['Dr.1','Dr.2','Dr.3'];
    let state;
    const countrie =['Germany','India','France']

    const gstate = ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']
    const istate = ['MH', 'Goa', 'MP', 'Delhi']
    const fstate =['Auvergne','Bretagne','Corse','Centre']

    if(cdata.countrie==="Germany"){

      state = gstate.map((gstate,key)=> <option key={key} value={gstate}>{gstate}</option>)

   }else if(cdata.countrie==="India"){

      state = istate.map((istate,key)=> <option key={key} value={istate}>{istate}</option>)

   }else{

     state = fstate.map((fstate,key)=> <option key={key} value={fstate}>{fstate}</option>)
   }

  const countries = countrie.map((countrie,key)=> <option key={key} value={countrie}>{countrie}</option>)
   const docs=doc.map((doc,key)=> <option key={key} value={doc}>{doc}</option>);
  function handleCountry(e){
    
    setName({...cdata,countrie:e.target.value});

  }

  function handleStateChange(e){
    
    setName({...cdata,state:e.target.value});
  }

  
  function handleRefChange(e){
    
    setRef({...ref,doc:e.target.value});
  }



    const[fullname,setFullname]=useState();
    const[address,setAddress]=useState();
    const[email,setEmail]=useState();
    const[gender,setGender]=useState();
    const[dob,setDob]=useState();
    const[note,setNote]=useState();
    const[mobile,setMobile]=useState();
    

    const[data,setData]=useState();
    const details=[{
      fullname:fullname,
      gender:gender,
      dob:dob,
      ref:ref.doc,
      address:address,
      country:cdata.countrie,
      state:cdata.state,
      mobile:mobile,
      email:email,
      note:note
    }];

    function save(event){
      id++;
        //event.preventDefault();
       // var response=([fullname,gender,dob,ref,address,country,state,mobile,note]);
        console.log("details",details);
        //let string=JSON.stringify(details)
        console.log("fullanme", JSON.stringify(details[0]));
        //setData(response);
       localStorage.setItem(`patient${id}`, JSON.stringify(details));
        
    }

    return(
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
            
            
              <Link to='/display'>Details
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
  <main className="my-form" style={{display:'flex'}}>
    <div className="container" style={{display:''}}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card" style={{display:''}}>
            <div className="card-header">Patient Registration</div>
            <div className="card-body">
              <form
                name="my-form"
                onsubmit="return validform()"
                action=""
                method=""
              >
                <div className="form-group row">
                  <label
                    htmlFor="full_name"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Name
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      
                      value={fullname}
                      onChange={(event)=>{
                        setFullname(event.target.value);
                      }}required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="gender"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Gender
                  </label>
                                            <div className="col-md-4">
                                                <div className="form-group">

                                                    <label className="radio-inline">
                                                        <input type="radio" className="form-control" name="gender_female" id='female' value={gender}
          onChange={(event) => setGender('female')}required/>
                                                        Female
                                                    </label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                
                                                
                                                    <label className="radio-inline">
                                                        <input type="radio" className="form-control" name="gender_male" id='male' value={gender}
          onChange={(event) => setGender('male')}required/>
                                                         Male 
                                                    </label>
                                                </div>
                                            </div>

                  
                </div>


                <div className="form-group row">
                  <label
                    htmlFor="address"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    DOB
                  </label>
                  <div className="col-md-6">
                    <input
                      type="date"
                      id="dob"
                      className="form-control"
                      name="dob"
                      value={dob}
          onChange={(event) => setDob(event.target.value)}required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="address"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Ref. Doctor
                  </label>
                  <div className="col-md-6">
                  <select value={ref.doc} onChange={handleRefChange}>
                   {docs}
                 </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="address"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Address
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      name="address"
                      value={address}
          onChange={(event) => setAddress(event.target.value)}required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="country"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Country
                  </label>
                  <div className="col-md-6">
                  <select value={cdata.countrie} onChange={handleCountry}>
                   {countries}
                 </select>
                  </div>
                

                  <label
                    htmlFor="address"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    State
                  </label>
                  <div className="col-md-6">
                  <select value={cdata.state} onChange={handleStateChange}>
                  {state}
          </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="phone_number"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Mobile
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="mobile"
                      className="form-control"
                      value={mobile}
          onChange={(event) => setMobile(event.target.value)}required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="present_address"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Email
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="mail"
                      className="form-control"
                      value={email}
          onChange={(event) => setEmail(event.target.value)}required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="permanent_address"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Note
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="note"
                      className="form-control"
                      name="permanent-address"
                      value={note}
          onChange={(event) => setNote(event.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="form-group row">
                  <label
                    htmlFor="nid_number"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    <abbr title="National Id Card">NID</abbr> Number
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="nid_number"
                      className="form-control"
                      name="nid-number"
                    />
                  </div>
                </div> */}
                <div className="col-md-6 offset-md-4">
                  <button type="submit" className="btn btn-primary" onClick={save}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
    )
}

export default Form;


