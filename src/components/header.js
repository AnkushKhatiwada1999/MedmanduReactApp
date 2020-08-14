import React,{Component} from 'react';

import {Link} from 'react-router-dom'



class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <style dangerouslySetInnerHTML={{__html: " @import url('css/form.css')" }} />
            <style dangerouslySetInnerHTML={{__html: " @import url('css/login.css')" }} />
            <style dangerouslySetInnerHTML={{__html: " @import url('css/style.css')" }} />

<header className="main-header">
        <div className="container row">
          <div className="page-title">
            <h1> <img id="medmandulogo" src="logo.png" alt="" /> </h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="home.html">Home</Link></li>
              <li><Link to="category.html">Category</Link></li>
              <li> <Link to="healthtips.html">Healthtips</Link></li>
              <li><Link to="about.html">Aboutus</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="login.html">Login</Link></li>
            </ul>
          </nav>
         
        </div>
      </header>
      </div>

        )
    }
}
export default Header;