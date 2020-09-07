import React from 'react'

import {Form, FormGroup, Input, Button, Label} from 'reactstrap'

export const AddUser = () => {
    return (
      <Form>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="EnterName"></Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
      </Form>
    )
}
