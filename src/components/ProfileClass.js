import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
        console.log("Child - Constructor called "+this.props.name);
    }

    componentDidMount(){
        console.log("Child - ComponentDidMount "+this.props.name);
    }
  render() {
    const {count} = this.state;
    console.log("Child - Render "+this.props.name);
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {count}</h2>
        <button onClick={() => {
            this.setState({
                count: 1,
            })
        }}>SetCount</button>
      </div>
    );
  }
}

export default Profile;
