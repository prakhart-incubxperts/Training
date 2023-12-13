import { BrowserRouter as Router} from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import RegistrationForm from '../Pages/patientRegistration';
import Display from '../Pages/detailForm';


function Routing(){
    return(
        <>
        <Router>
        <Routes>
        <Route exact path="/" element={<RegistrationForm />}></Route>
            <Route exact path="/patient" element={<RegistrationForm />}></Route>
            <Route exact path="/display" element={<Display />}></Route>
        </Routes>
        </Router>
        

        </>
    )
    
}
export default Routing;