import './App.css';
import {useState} from 'react';


function App() {
	


  return (
    <div className="App">
	
	  {/*Dependencies*/}
	  <py-env>
	  - numpy {"\n"}
	  - pandas {"\n"}
	  - scikit-learn {"\n"}
	  - matplotlib
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
	  import pandas as pd {"\n"}
	  import pyodide {"\n"}
	  import matplotlib.pyplot as plt {"\n"}
	  from sklearn import datasets, linear_model {"\n"}
	  from sklearn.model_selection import train_test_split {"\n"}
	  url="http://raw.githubusercontent.com/TusharAMD/GFG-Pyscript-Demo/master/data.csv" {"\n"}
	  dataset=pd.read_csv(pyodide.http.open_url(url)) {"\n"}
	  
	  X = dataset.iloc[:, :-1].values {"\n"}
	  y = dataset.iloc[:, 1].values {"\n"}
	  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0) {"\n"}
	  
	  regressor = linear_model.LinearRegression() {"\n"}
	  regressor.fit(X_train, y_train) {"\n"}
	  print(regressor.coef_) {"\n"}
	  print("X TEST") {"\n"}
	  print(X_test) {"\n"}
	  y_pred = regressor.predict(X_test) {"\n"}
	  print("Predicted") {"\n"}
	  print(y_pred)
	  
      </py-script>

      
      {/*<button id="mybutton" pys-onClick="dosomething">Press this</button>*/}
    </div>
  );
}

export default App;
