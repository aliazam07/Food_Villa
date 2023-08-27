import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
       this.state = {
        userInfo: {
          name: "Dummy man",
          location: "Jannat",
        }
       }
        console.log("Child - Constructor called "+this.props.name);
    }

    // async componentDidMount(){
    //   //API calls
    //   const data = await fetch("https://api.github.com/users/aliazam07");
    //   const json = await data.json();
    //   this.setState({
    //     userInfo: json,
    //   });
    //     console.log("Child - ComponentDidMount "+this.props.name);
    // }

  componentDidMount(){
    this.timer = setInterval(()=>{
      console.log("REACT OP");
    }, 1000);
    console.log("Component did Mount");
  }

    componentDidUpdate(){
      console.log("ComponentDidUpdate");
    }

    componentWillUnmount(){
      clearInterval(this.timer);
      console.log("ComponentWillUnmount")
    }
  render() {
 
    console.log("Child - Render "+this.props.name);
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        <img src={this.state.userInfo.avatar_url} />
    
      </div>
    );
  }
}

export default Profile;
