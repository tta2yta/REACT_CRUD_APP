import React, { useContext } from 'react'
import{Link} from 'react-router-dom'
import{GlobalContext} from '../Context/GlobalState'
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

export const UseList = () => {
    const {users}=useContext(GlobalContext)
    console.log(users)
    return (
        <ListGroup className="mt-3">
            {users.map(user => (

            <ListGroupItem className="d-flex mb-2">
                <strong>{user.name}</strong>
                <div className='ml-auto'>
                    <Link to="/edit/1" className="btn btn-warning mr-1">Edit</Link>
                    <Button color="danger">Delete</Button>
                </div>
                

            </ListGroupItem>
            ))}
            
        </ListGroup>
    )
}
