import React from 'react';
import PropTypes from 'prop-types'
import "./App.css"

function App() {
	return (<div className="App">
	<header className="App-header">
	  <HelloWorld name='' greeting='Yo'/>
	  <HelloWorld name='' />
	</header>
  </div>);
}

function HelloWorld(name, greeting='Hello') {
	return  <h1>{greeting} {name}</h1>
}

HelloWorld.propTypes = {
	name: PropTypes.string,
	greeting: PropTypes.string
}

export default App;
