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
	
	
	  {/*HTML Elements*/}
		  <div className="heading">
			Serverless App
		  </div>
		  <div className="subheading">
			Linear Regression
		  </div>
		  
		  {/*Single Input taking Voltage*/}
		  <div className="form">
		  <input id="givenVolt" placeholder="Enter new Voltage" /><br/>
		  <button id="add" pys-onClick="onAdd">Add</button>
		  </div>
		  {/*------------*/}
		  
		  {/*Displaying Resistance and Graph*/}
		  <div className = "content">
		  <div id="resistancediv">
		  <p>Values</p>
		  <div>Resistance value is: <span id="resistance">0</span></div><br/> 
		  <div>Current value: <span id="currentval">0</span></div> 
		  <div>For Voltage Value is: <span id="voltageval">0</span></div> 
		  </div>
		  <div id="plot">Graph</div>
		  </div>
		  {/*------------*/}
	  
	  {/*------------*/}
	  
	  
	  

      <py-script>
	  

	  import pandas as pd {"\n"}
	  import pyodide {"\n"}
	  import matplotlib.pyplot as plt {"\n"}
	  from sklearn import datasets, linear_model {"\n"}
	  from sklearn.model_selection import train_test_split {"\n"}
	  url="http://raw.githubusercontent.com/TusharAMD/GFG-Pyscript-Demo/master/data.csv" {"\n"}
	  dataset=pd.read_csv(pyodide.http.open_url(url)) {"\n"}
	  arr_voltage = dataset["Voltage"].tolist() {"\n"}
	  arr_current = dataset["Current"].tolist() {"\n"}
	  
	  
	  
	  X = dataset.iloc[:, :-1].values {"\n"}
	  y = dataset.iloc[:, 1].values {"\n"}
	  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0) {"\n"}
	  
	  regressor = linear_model.LinearRegression() {"\n"}
	  regressor.fit(X_train, y_train) {"\n"}
	  
	  Element("resistance").write(regressor.coef_[0])
	  
	  #print(regressor.coef_) {"\n"}
	  #print("X TEST") {"\n"}
	  #print(X_test) {"\n"}
	  #y_pred = regressor.predict(X_test) {"\n"}
	  #print("Predicted") {"\n"}
	  #print(y_pred)
	  
      </py-script>
	  
	  {/*
      <py-script output="plot">
		import matplotlib.pyplot as plt {"\n"}
		import numpy as np {"\n"}
		fig,ax = plt.subplots() {"\n"}
		plt.plot(arr_voltage,arr_current) {"\n"}
		fig {"\n"}

	  </py-script> */}
	  
	  
	  <py-script output="plot">
	  
	  def onAdd(*args,**kwargs): {"\n"}
		{"\t"}global regressor {"\n"}
		{"\t"}global arr_voltage {"\n"}
		{"\t"}global arr_current {"\n"}
		{"\t"}el=Element("givenVolt").value {"\n"}
		{"\t"}print(el){"\n"}
		{"\t"}print(el){"\n"}
		{"\t"}predicted_current = regressor.predict([[el]]){"\n"}
		{"\t"}print(predicted_current){"\n"}
		
		{"\t"}arr_voltage.append(int(el)){"\n"}
		{"\t"}arr_current.append(int(predicted_current[0])){"\n"}
		
		 
		{"\t"}fig,ax = plt.subplots() {"\n"}
		{"\t"}plt.plot(arr_voltage,arr_current,'o') {"\n"}
		{"\t"}plt.plot(sorted(arr_voltage),sorted(arr_current)) {"\n"}
		{"\t"}plt.xlabel("Voltage"){"\n"}
		{"\t"}plt.ylabel("Current"){"\n"}
		{"\t"}plt.title("Voltage vs Current Graph"){"\n"}
		{"\t"}Element("currentval").write(predicted_current[0]) {"\n"}
		{"\t"}Element("voltageval").write(el) {"\n"}
		{"\t"}Element("plot").write(fig) {"\n"}
		{"\t"}plt.clf(){"\n"}
		
	  </py-script>
	  
	  
      

      
      {/*<button id="mybutton" pys-onClick="dosomething">Press this</button>*/}
    </div>
  );
}

export default App;
