// import './App.css';
import React from 'react';
// import { createBrowserRouter } from "react-router-dom";
import Certefication from './pages/Certefication';
import Certefication2 from './pages/Certefication2';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Find from './pages/Find';
import Application from './pages/Application';
import ProfileStudent from './pages/ProfileStudent';
import Applicationdesc from './pages/Applicationdesc';
import Admincards from './pages/Admincards';
import Admindash from './pages/Admindash';



function App() {


  return (
    <div className="App">

    <Landing/>
    <Home />
    <Find />
    <ProfileStudent />
  
    
    <Application />
    <Applicationdesc></Applicationdesc>
    <Admincards></Admincards>
    
    <Admindash></Admindash>
    <Certefication/> 
    <Certefication2/>
   
    
   
    </div>
  );
}
export default App



// export const router = createBrowserRouter([
 
//   {
//     path: "/home",
//     element: <Home />, 
//   },
// ]);




// import React from 'react';
// import { createBrowserRouter } from "react-router-dom";
// // import Certification from './pages/Certification';
// // import Certification2 from './pages/Certification2';
// // import Landing from './pages/Landing';
// // import Home from './pages/Home';
// // import Find from './pages/Find';
// import Certefication from './pages/Certefication';
//  import Certefication2 from './pages/Certefication2';
//  import Landing from './pages/Landing';
// import Home from './pages/Home';
//  import Find from './pages/Find';


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />, 
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/find",
//     element: <Find />,
//   },
//   {
//     path: "/certification",
//     element: <Certefication  />,
//   },
//   {
//     path: "/certification2",
//     element: < Certefication2 />,
//   },
// ]);


