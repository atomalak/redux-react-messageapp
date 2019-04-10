import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPost} from './action';
import PostList from './PostList';


class App extends Component {

  state={
    name:"",
    message:"",
    id:""
  }

  
  addPostValue=()=>{
       
       this.props.addPost(this.state.name,this.state.message,Math.round(Math.random()*99999).toString());
       document.getElementById("message").value="";
       document.getElementById("name").value="";
       this.setState({
         name:"",
         message:""
       })
  }


  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col col-4">
            <form>
              <div className="form-group">
                <label>Kullanıcı Adınız</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>{
                   this.setState({
                     name:e.target.value
                   })
                }}></input>
              </div>
              <div className="form-group">
                <label> Mesajınız</label>
                <input type="text" className="form-control"  id="message" onChange={(e)=>{ 
                  this.setState({
                    message:e.target.value
                  })
                }} />
              </div>
              <a className="btn btn-primary" onClick={this.addPostValue}>
                Ekle
              </a>
            </form>
          </div>
          <div className="col col-sm-6">
            <PostList postList={this.props.postList}/>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  console.log(state);
  return {
    postList:state.postList
  }
}




export default connect(mapStateToProps,{addPost})(App);
