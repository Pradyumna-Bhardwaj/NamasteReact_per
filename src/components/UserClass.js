import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this);

    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Pradyumna-Bhardwaj");
    const json = await data.json();

    console.log(json);

    this.setState({ userInfo: json });
  }
  render() {
    return (
      <div className="profile-container">
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name: {this.state.userInfo.name}</h3>
      </div>
    );
  }
}

export default UserClass;
