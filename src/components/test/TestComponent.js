import React, { Component } from 'react'

class TestComponent extends Component {

  state = {
    posts: []
  }
  componentDidMount(){
    console.log(1111);
    fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.setState({
              posts: data
            });
            

          })
  }

  // componentDidUpdate(){
  //   console.log(2222);
  // }

  
  render() {
    const {posts} = this.state;
    return (
      <div>
        <h2>Posts</h2>

        <div className="posts">          
            {}
            { 
              Object.keys(posts).map((key, index) => {
                return (
                  <div className="card p-2 mb-2" key={index}>
                    <h3>{posts[key].title}</h3>
                    <p>{posts[key].body}</p>
                    {/* {console.log(posts[key].title)} */}
                  </div>
                )
              })
            }
            
          
        </div>
        
      </div>
    )
  }
}

export default TestComponent;