import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [refresh,setRefresh] = useState(true)

  function refreshfun(){
    setRefresh(!refresh)
    console.log(refresh)
  }


  return (
    <div className="App">
	
	  {/*Dependencies*/}
	  <py-env>
	  - numpy {"\n"}
	  - scikit-learn
	  </py-env>
	  {/*------------*/}
	
	
	  
      <div className="heading">
        Serverless App
      </div>
	  <div className="subheading">
        Linear Regression
      </div>
	  
	  
	  <div className="form">
	  <input placeholder="Enter new Voltage" /><br/>
	  <button>Add</button>
	  </div>
      
	  

      <py-script>
	  
      
      </py-script>

      
      {/*<button id="mybutton" pys-onClick="dosomething">Press this</button>*/}
    </div>
  );
}

export default App;
