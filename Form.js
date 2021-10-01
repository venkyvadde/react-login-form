import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
    }
    login(){
      console.log("clicked onsubmit form")
    }
    onChangeusername(uservalue){
       this.setState({
           username:uservalue
       });
    }
    onChangepassword(passvalue){
this.setState({
    password:passvalue
});
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
              <form onSubmit={this.login}>
                  <input type="text" value={this.state.username} onChange={(e)=> this.onChangeusername(e.target.value)} placeholder="username"/> <br/>
                  <input type="password" value={this.state.password} onChange={ (e)=> this.onChangepassword(e.target.value)} placeholder="password"/> <br/>
                  <input type="submit" value="login"></input>
                  </form>   

                           
            </div>
        )
    }
}

export default Form
