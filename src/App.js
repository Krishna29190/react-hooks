import './App.css';
import { useState, useEffect } from 'react';
import First from './Components/First';
import Userefexample from './Components/Userefexample';
import UseMemoExample from './Components/UseMemoExample';
import UseCallback from './Components/UseCallback';
import UseReduserExample from './Components/UseReduserExample';
import UseCustomHook from './Components/UseCustomHook';





function App() {

  return (

    //   const [num, setNum]=useState(0);
    //   const [nums, setNums]=useState(0);

    //   useEffect(() => {  
    //    alert("Button is clicked");
    //   },[num])

    //   return (
    //     <div className="App">

    //       <div>


    //       {num}<br></br>

    //       <button onClick={()=>{

    //         setNum(num+1);
    //       }

    //       // ()=>{

    //       //   alert("Button is clicked");
    //       // })



    //       }> CLICK</button>

    // </div>

    // <div>


    //       {nums}<br></br>

    //       <button onClick={()=>{

    //         setNums(nums+1);
    //       }

    //       // ()=>{

    //       //   alert("Button is clicked");
    //       // })



    //       }> CLICK2</button>

    // </div>
    //     </div>

    <div>

      {/* <Userefexample/> */}

      {/* <UseReduserExample/> */}
      {/* <UseCallback/> */}
      <UseCustomHook/>
    </div>
  );
}

export default App;
