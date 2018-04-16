import React from 'react';

class Users extends React.Component{
    constructor(){
        super();
        this.state={
            users : []
        }
    }

    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                {this.props.data}
                {
                    this.state.users.map((user, index)=>{
                        return(
                            <div key={index}>
                                <img src={user.picture.medium} alt={user.name.first}/>
                                <p><b>Name:</b> {user.name.title} {user.name.first} {user.name.last}</p>
                                <p><b>Email:</b> {user.email}</p>
                                <p><b>Phone:</b> {user.phone}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Users;