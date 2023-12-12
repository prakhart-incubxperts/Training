import { useNavigate } from "react-router-dom";


export function savePatientDetails(details){
    
    details.pid=++details.pid;
    var array = JSON.parse(localStorage.getItem('PatientDetails') || '[]');
    array.push(details);
  localStorage.setItem('PatientDetails', JSON.stringify(array));
  alert('Data saved successfully...');
}
debugger;

// export function editPatientData(pid){
//   const navigate=useNavigate();  
// console.log(' called from edit pid:',pid);
// const data=(JSON.parse(localStorage.getItem('PatientDetails')));

// var index;  
// data.findIndex(function (entry, i) { 
//     if (entry.pid == (pid)) { 
//         index = i; 
//         return true; 
//     } 
// });
// const firstValue = Object.values(data)[index];
// console.log(firstValue);
//   function handleClick() {
//     navigate("/");
//   }

// }

export function deletePatientData(pid){
    console.log(' called from delete pid:',pid);
    const data=(JSON.parse(localStorage.getItem('PatientDetails')));

var index; 
  
data.findIndex(function (entry, i) { 
    if (entry.pid == (pid)) { 
        index = i; 
        return true; 
    } 
}); 
console.log('index:',index);
console.log('data before splcd:',data);
var splcdData=data.splice(index,pid);
 console.log('spliced data',splcdData);
 console.log('data afetr splcd:',data);
 console.log('stringy data:',JSON.stringify(data))
 localStorage.setItem('PatientDetails', JSON.stringify(data));

}

