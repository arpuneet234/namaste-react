import Profile from "./ProfileClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }

  componentDidMount() {
    console.log("parent -componentDidMount ");
  }

  render() {
    console.log("parent-render");
    return (
      <>
        <h1>About Us Page</h1>

        <Profile name="puneet" />
      </>
    );
  }
}

export default About;
