import React, { Component } from 'react';

interface User {
    name: string,
    age: number
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}


class UserSearch extends Component<UserSearchProps> {

    state: UserSearchState = {
        name: '',
        user: undefined
    }

    findUserFn = () => {
        const foundUser = this.props.users.find(user => {
            return user.name === this.state.name;
        })

        this.setState({
            user: foundUser
        })
    }

    render() {
        const { name, user } = this.state;
        return (
            <div>
                <h2>UserSearch</h2>
                <input type="text" name="name" id="name" value={name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={this.findUserFn}>Find User</button>
                <div>
                    {
                        user && (
                            <div>
                                <h4> {user.name} {user.age} </h4>
                            </div>
                        )
                    }
                </div>

            </div>
        )
    }
}

export default UserSearch