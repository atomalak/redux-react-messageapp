import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deletePost} from './action';

const style={
    marginTop:"100px"
}


class PostList extends Component {
    
    removePost=(id)=>{
       this.props.deletePost(id);
    }
    
    render() {



        const { postList } = this.props;
        if (postList.length==0) {
            return (
                <div className="panel panel-default" style={style}>
                    <div className="panel-body">Herhangi bir post bilgisi girilmemiştir</div>
                </div>
            )
        } else {
          return postList.map((post, i) => {
                return (
                    <div className="panel panel-default" key={i} style={style}>
                        <div className="panel-body">{post.name}</div>
                        <div className="panel-footer">
                             {post.message}
                             
                        </div>
                        <div className="panel-footer">
                           <a className="btn btn-danger" onClick={()=>this.removePost(post.id)}>
                             Sil
                           </a>
                        </div>
                    </div>
                )
            })

        }


     
    }
}

export default connect(null,{deletePost})(PostList);