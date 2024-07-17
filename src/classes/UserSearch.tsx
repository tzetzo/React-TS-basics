import { Component } from "react";

interface User {
  name: string;
  age: number;
}

// Props received by the Component
interface UserSearchProps {
  users: User[];
}

// State used in the Component
interface UserSearchState {
  name: string;
  user: undefined | User;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  }

  render() {
    const {name, user} = this.state;

    return (
      <div>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user?.name} 
          {user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
