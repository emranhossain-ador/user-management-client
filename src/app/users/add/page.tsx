"use client";

import { Button, Description, FieldError, Fieldset, Form, Input, Label, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';

const AddUserPage = () => {

const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data =  Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
         headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    const result = await response.json();

    console.log(result);

    if(result.success){
        redirect('/');
    }

  };


    return (
        <Form className="w-full max-w-96 p-5" onSubmit={onSubmit}>
            <Fieldset>
                <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                <Description>Update your profile information.</Description>

            
                <TextField>
                    <Label>Name</Label>
                    <Input name='name' placeholder="John Doe" />
                </TextField>

                <TextField isRequired name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>


                <Fieldset.Actions>
                <Button type="submit">
                    Save changes
                </Button>
                <Button type="reset" variant="secondary">
                    Cancel
                </Button>
                </Fieldset.Actions>
            </Fieldset>
        </Form>
    );
};

export default AddUserPage;