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
      <h1>
        MY PAGE
      </h1>
      <p>Content</p>
      <input id="myinput" />
      <py-script>
      def dosomething(*args,**kwargs):
        print(Element('myinput').value)
      </py-script>

      {/*<button onClick={refreshfun}>Press this</button>*/}
      <button id="mybutton" pys-onClick="dosomething">Press this</button>
    </div>
  );
}

export default App;
