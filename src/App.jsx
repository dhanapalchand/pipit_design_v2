
import './App.css'
import Body from './components/Body.jsx';
import Counter from './components/Counter.jsx';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx'
import { useEffect, useState,useContext } from 'react';
import { ThemeContext } from './contexts/theme.js';
// import { CounterContext } from './contexts/count.js';
import Product from './components/Product.jsx';
import Topbar from './components/Topbar.jsx';
import { Outlet } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



// function App() {
//   const name = "dhana";
//   const age = 22;
//   const deparment ="msc";
//   const weight=55;
//   return (
//     <div>
//       <Navbar/>
//       <h1>app componenet</h1>
//       <p>name {name}</p>
//       <p>age {age}</p>
//       <Body name={name} age={age} deparment={deparment} weight={weight}/>
//       <Counter/>
    
//     </div>
//   )
// }




// arrow function
// const App= ()=>{
//   return (
//     <div>hello</div>
//   )
// }


//20.06.2024

// function App(){
//   const [theme,setTheme]=useState('Light');
//   const [counter,setCounter]=useState(0);

//   function toggleTheme(){
//     setTheme(theme === 'Light' ? 'Dark' : 'Light')
// setCounter(counter+1);
//   }
//  useEffect(()=>{
// document.body.className= theme;
//  },[theme])

//   return (
//     <>
//     <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
//     <Header/>
//     <CounterContext.Provider value={{counter:counter,setCounter:setCounter}}>
//     <Counter/>
//     </CounterContext.Provider>
// </ThemeContext.Provider>

//     </>
//   )
// }


function App(){
  const [theme,setTheme]=useState('Light');
    const [counter,setCounter]=useState(0);
  
    function toggleTheme(){
      setTheme(theme === 'Light' ? 'Dark' : 'Light')
  setCounter(counter+1);
    }
   useEffect(()=>{
  document.body.className= theme;
   },[theme])
  
    return (
      <>
      <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
      <Header/>
 
      {/* <CounterContext.Provider value={{counter:counter,setCounter:setCounter}}>
      <Counter/>
      </CounterContext.Provider> */}
  <Outlet/>
  <ToastContainer/>
  </ThemeContext.Provider>
  </>)
}
export default App;