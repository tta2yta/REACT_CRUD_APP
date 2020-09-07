import React, {useContext, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import{GlobalContext} from '../Context/GlobalState'
import {v4 as uuid} from 'uuid';'
import {Link} from 'react-router-dom';

import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export const EditUser = () => {
    const [selectedUser, setSelectedUser]=useState({
        id:'',
        name:''
    })
    const {users, editUser}=useContext(GlobalContext)
    const history= useHistory();
    const onSubmit=()=>{
        const newUser={ id:uuid(), name:name}
        addUser(newUser);
        history.push('/');
    }

    const onchange=(e)=>{
        setName(e.target.value)
    }

    return (
        <div>
            <h2>Edit User</h2>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="EnterName"></Input>
                </FormGroup>
                <Button type="submit">Edit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </Form>
        </div>
    )
}
