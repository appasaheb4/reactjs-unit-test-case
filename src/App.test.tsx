import React from 'react';
import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', {name: /name/i});
  const emailInput = screen.getByRole('textbox', {name: /email/i});
  const button = screen.getByRole('button');
  user.click(nameInput);
  user.keyboard('appa');
  user.click(emailInput);
  user.keyboard('appa@gmail.com');
  user.click(button);
  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
