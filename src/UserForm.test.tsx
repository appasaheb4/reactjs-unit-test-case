import React from 'react';
import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and button',()=>{
render(<UserForm onUserAdd={()=>{}}/>);
const inputs = screen.getAllByRole('textbox');
const button = screen.getByRole('button');
expect(inputs).toHaveLength(2)
expect(button).toBeInTheDocument();
})


test('it render both fileds',()=>{
    const mock = jest.fn()
    render(<UserForm onUserAdd={mock}/>);
    const nameInput = screen.getByRole('textbox',{name:/name/i});
    const emailInput = screen.getByRole('textbox',{name:/email/i});
    user.click(nameInput)
    user.keyboard('jane')
    user.click(emailInput)
    user.keyboard('jane@jane.com')
    const button = screen.getByRole('button')
    user.click(button)
    // screen.logTestingPlaygroundURL(document.documentElement)
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name:'jane',email:'jane@jane.com'});
    })