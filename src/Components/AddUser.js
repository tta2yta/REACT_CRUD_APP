import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import{GlobalContext} from '../Context/GlobalState'
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export const AddUser = () => {
    const {addUser}=useContext(GlobalContext)
    const history= useHistory();
    const onSubmit=()=>{
        const newUser={ id:4, name:'kkk'}
        addUser(newUser);
        history.push('/');
    }
    return (
      <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="EnterName"></Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    )
}
