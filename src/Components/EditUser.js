import React, {useContext, useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom';
import{GlobalContext} from '../Context/GlobalState'
import {v4 as uuid} from 'uuid';

import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser]=useState({
        id:'',
        name:''
    })
    const currentUserId = props.match.params.id;
    const {users, editUser}=useContext(GlobalContext)
    const history= useHistory();
    useEffect(()=>{
        const userId=currentUserId;
        const selectedUser=users.find(user => user.id ===Number(userId))
        setSelectedUser(selectedUser)

    }, [currentUserId, users])
    const onSubmit=()=>{
       editUser(selectedUser)
       history.push('/')
    }

    const onchange=(e)=>{
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Edit User</h2>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name='name' value={selectedUser.name} placeholder="EnterName" onChange={onchange}></Input>
                </FormGroup>
                <Button type="submit">Edit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </Form>
        </div>
    )
}
