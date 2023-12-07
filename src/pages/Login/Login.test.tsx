import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Login, { ILoginFormInput } from '.';

// Mocks
const mockLoginHandler = vi.fn();
vi.mock('@/services/AccountApi', async importOriginal => {
  const mod = await importOriginal<typeof import('@/services/AccountApi')>();
  return {
    ...mod,
    LoginHandler: async (data: ILoginFormInput) => {
      mockLoginHandler(data);
      return {
        status: 'success',
        data: '',
      };
    },
  };
});

describe('Login', () => {
  beforeEach(() => {
    mockLoginHandler.mockClear();
  });
  it('Should render email and password field and login button', async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log in');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  it('should log in successfully when valid email and password are provided', async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log in');

    const emailValue = 'mail@mail.com';
    const passwordValue = '1234';

    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.click(loginButton);

    expect(mockLoginHandler).toHaveBeenCalledWith({
      email: emailValue,
      password: passwordValue,
    });
  });
  it("shouldn't log in  when missing email", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log in');

    const passwordValue = '1234';

    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.click(loginButton);

    expect(mockLoginHandler).not.toHaveBeenCalled();
  });
  it("shouldn't log in  when missing password", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const emailInput = screen.getByPlaceholderText('Email');
    const loginButton = screen.getByText('Log in');

    const emailValue = 'mailmail.com';

    fireEvent.change(emailInput, { target: { value: emailValue } });

    fireEvent.click(loginButton);

    expect(mockLoginHandler).not.toHaveBeenCalled();
  });
  it("shouldn't log in  when invalid email or password are provided", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log in');

    const emailValue = 'mailmail.com';
    const passwordValue = '1234';

    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });
    fireEvent.click(loginButton);

    expect(mockLoginHandler).not.toHaveBeenCalled();
  });
});
