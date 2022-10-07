import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Navbar/Home';
import Menu from './components/Navbar/Menu';
import About from './components/Navbar/About'
import Contact from './components/Navbar/Contact'



class App extends Component {

  getFetchUsers() {
    this.setState({
        loading: true
    }, () => {
        fetch("http://localhost:3000/posts").then(res => res.json()).then(result => this.setState({
            loading: false,
            users: result
        })).catch(console.log);
    });
}

render() {
	return (
		
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = { <Home />}/>
      <Route path='/menu' element = { <Menu />}/>
      <Route path='/about' element = { <About />} />
      <Route path = '/contact' element = { <Contact />}/>
    </Routes>
    </BrowserRouter>

	);
}
}

export default App;

