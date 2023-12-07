import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Signup, { ISignUpFormInput } from '.';

// Mocks
const mockSignUpHandler = vi.fn();
vi.mock('@/services/AccountApi', async importOriginal => {
  const mod = await importOriginal<typeof import('@/services/AccountApi')>();
  return {
    ...mod,
    SignUpHandler: async (data: ISignUpFormInput) => {
      mockSignUpHandler(data);
      return {
        status: 'success',
        data: '',
      };
    },
  };
});

describe('Signup', () => {
  beforeEach(() => {
    mockSignUpHandler.mockClear();
  });
  it('Should render all input field and signup button', async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );
    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');
    expect(firstnameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });
  it('should sign up successfully when valid input is provided', async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );
    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = 'Khaled';
    const lastnameValue = 'Hegazy';
    const usernameValue = 'khaledhegazy';
    const emailValue = 'khaledhegazy870@gmail.com';
    const passwordValue = '1234';
    const confirmPasswordValue = '1234';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).toHaveBeenCalledWith({
      firstName: firstnameValue,
      lastName: lastnameValue,
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    });
  });
  it("shouldn't log in  when missing first name", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = '';
    const lastnameValue = 'Hegazy';
    const usernameValue = 'khaledhegazy';
    const emailValue = 'khaledhegazy870@gmail.com';
    const passwordValue = '1234';
    const confirmPasswordValue = '1234';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).not.toHaveBeenCalled();
  });
  it("shouldn't log in  when missing last name", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = 'Khaled';
    const lastnameValue = '';
    const usernameValue = 'khaledhegazy';
    const emailValue = 'khaledhegazy870@gmail.com';
    const passwordValue = '1234';
    const confirmPasswordValue = '1234';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).not.toHaveBeenCalled();
  });
  it("shouldn't log in  when missing username", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = 'Khaled';
    const lastnameValue = 'Hegazy';
    const usernameValue = '';
    const emailValue = 'khaledhegazy870@gmail.com';
    const passwordValue = '1234';
    const confirmPasswordValue = '1234';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).not.toHaveBeenCalled();
  });
  it("shouldn't log in  when missing email", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = 'Khaled';
    const lastnameValue = 'Hegazy';
    const usernameValue = 'khaledhegazy';
    const emailValue = '';
    const passwordValue = '1234';
    const confirmPasswordValue = '1234';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).not.toHaveBeenCalled();
  });
  it("shouldn't log in  when missing password", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = 'Khaled';
    const lastnameValue = 'Hegazy';
    const usernameValue = 'khaledhegazy';
    const emailValue = 'khaledhegazy870@gmail.com';
    const passwordValue = '';
    const confirmPasswordValue = '1234';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).not.toHaveBeenCalled();
  });
  it("shouldn't log in  when missing confirm password", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = 'Khaled';
    const lastnameValue = 'Hegazy';
    const usernameValue = 'khaledhegazy';
    const emailValue = 'khaledhegazy870@gmail.com';
    const passwordValue = '1234';
    const confirmPasswordValue = '';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).not.toHaveBeenCalled();
  });

  it("shouldn't log in  when invalid email is provided", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const firstnameInput = screen.getByPlaceholderText('First Name');
    const lastnameInput = screen.getByPlaceholderText('Last Name');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    const signupButton = screen.getByText('Create Account');

    const firstnameValue = 'Khaled';
    const lastnameValue = 'Hegazy';
    const usernameValue = 'khaledhegazy';
    const emailValue = 'khaledhegazy870gmail.com';
    const passwordValue = '1234';
    const confirmPasswordValue = '1234';

    fireEvent.change(firstnameInput, { target: { value: firstnameValue } });
    fireEvent.change(lastnameInput, { target: { value: lastnameValue } });
    fireEvent.change(usernameInput, { target: { value: usernameValue } });
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPasswordValue },
    });
    fireEvent.click(signupButton);

    expect(mockSignUpHandler).not.toHaveBeenCalled();
  });
});
