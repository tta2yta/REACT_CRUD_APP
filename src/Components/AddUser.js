import React from 'react'
import {Link} from 'react-router-dom';

import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export const AddUser = () => {
    return (
      <Form>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="EnterName"></Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    )
}
