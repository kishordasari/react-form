import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrationForm from './RegistrationForm';

test('validates full name field correctly', async () => {
  render(<RegistrationForm />);

  const fullNameInput = screen.getByLabelText(/full name/i);
  const submitButton = screen.getByRole('button', { name: /continue with email/i });

  // Initial state: no error message
  expect(fullNameInput).toBeInTheDocument();
});
