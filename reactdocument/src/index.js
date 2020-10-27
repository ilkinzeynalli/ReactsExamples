import React from 'react';
import ReactDOM from 'react-dom';

// Bu kullanım güvenlidir:
const element = (<h1 className="greeting">
                  Hello, world!
                 </h1>);

 const element2 = React.createElement("h1",{className:"greeting"},"Hello, world!")


// function formantName(user) {
//   return user.firstName + ' ' + user.lastName;
// }


// const user = {
//   firstName:'Ilkin',
//   lastName:'Zeynalli'
// };

// const element = (
//   <h1>Merhaba Dunya {formantName(user)}</h1>
// ); 

ReactDOM.render(
  element2,
  document.getElementById('root')
);

{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}


