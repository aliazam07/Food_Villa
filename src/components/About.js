import React from "react";
import Profile from "./ProfileClass";
// import ProfileFunComponent from "./Profile";

//  const About = ()=>{
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>
//         This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
//       </p>
//       <ProfileFunComponent name={"Md Ali Azam"}/>
//       <Profile name={"Md Ali Class"} />

//     </div>
//   );
//  }
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor")
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount")
  }
  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
       
        <Profile name={"First Child"}  />
     
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
