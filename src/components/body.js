import React,{Component} from 'react';


class Body extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                
      <style dangerouslySetInnerHTML={{__html: "\n\n*{\n  margin: 0;\n  padding: 0;\n  font-family: \"montserrat\",sans-serif;\n}\nbody{\n      background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(logo.png)\n        background-size: cover;\n        background-position: center;\n        color: #fff !important;\n}\n.contact-section{\n  margin: 90px auto;\n  text-align: center;\n  padding: 40px 0;\n}\n.contact-section h1{\n  text-align: center;\n  color:black;\n}\n.border{\n  width: 400px;\n  height: 6px;\n  background:black;\n  margin: 10px auto;\n  margin-left: 50%;\n}\n\n.contact-form{\n  max-width: 600px;\n  margin: auto;\n  padding: 0 10px;\n  overflow: hidden;\n}\n\n.contact-form-text{\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 16px 0;\n  border: 0;\n  background:rgb(198, 214, 160);\n  padding: 20px 40px;\n  outline: none;\n  color:black;\n  transition: 0.5s;\n}\n.contact-form-text:focus{\n  box-shadow: 0 0 10px 4px #a1b2c4;\n}\ntextarea.contact-form-text{\n  resize: none;\n  height: 120px;\n}\n.contact-form-btn{\n  float: right;\n  border: 0;\n  background: darkcyan;\n  color: #fff;\n  padding: 12px 50px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.contact-form-btn:hover{\n  background: #4191c7;\n}\n.header{\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 50%;  ) {\n.page-title{\n  height: 10%;\n  columns: 2;\n}\n.li{\n  display: grid;\n  margin:2%;}\n  .search-bar{\n    margin-left: 2%;\n  }\n}\n}\n@media screen and (max-width: 600px) {\n\n}\n\n\t" }} />
      <style dangerouslySetInnerHTML={{__html: " @import url('css/form.css')" }} />
      <style dangerouslySetInnerHTML={{__html: " @import url('css/login.css')" }} />
      <style dangerouslySetInnerHTML={{__html: " @import url('css/style.css')" }} />
            <div className="contact-section">
            <h1>Contact Us</h1>
            <div className="border" />
            <form id="contactForm" className="contact-form" action="index.html?reDir==1" method="post">
              <input type="text" id="name" className="contact-form-text" placeholder="Your name" />
              <input type="email" id="email" className="contact-form-text" placeholder="Your email" />
              <input type="text" id="phone" className="contact-form-text" placeholder="Your phone" />
              <textarea id="txtarea" className="contact-form-text" placeholder="Comment" defaultValue={""} />
              <input type="button" className="contact-form-btn" onclick="myFunction()" onenter="myFunction()" defaultValue="Send" />
            </form>
          </div>
          </div>

        )
    }
}
export default Body;