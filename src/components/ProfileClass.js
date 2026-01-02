import React from "react";

class Profile extends React.Component {
  constructor(props) {
    console.log("child-constructor");
    super(props);
    this.state = {
      userInfo: {
        name: "DummyName",
        id: "dummyId",
      },
    };
  }

  async componentDidMount() {
    console.log("child-component did mount ");
    const data = await fetch("https://api.github.com/users/arpuneet234");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    //API call
  }

  render() {
    console.log("child-render");
    return (
      <>
        <h1>Profile Class Based Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>{this.state.userInfo.name}</h2>
        <h3>{this.state.userInfo.location}</h3>
      </>
    );
  }
}

export default Profile;
