import { BrowserRouter as Router} from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Form from '../Pages/patientRegistration';
import Display from '../Pages/detailForm';


function Routing(){
    return(
        <>
        <Router>
        <Routes>
        <Route exact path="/" element={<Form />}></Route>
            <Route exact path="/patient" element={<Form />}></Route>
            <Route exact path="/display" element={<Display />}></Route>
        </Routes>
        </Router>
        

        </>
    )
    
}
export default Routing;