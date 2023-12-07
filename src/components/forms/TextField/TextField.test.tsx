import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './index';
import { vi } from 'vitest';

describe('code snippet', () => {
  // Renders an input field with the given type, placeholder, name, value, and onChange function
  it('should render an input field with the given props', () => {
    // Arrange

    const type = 'text';
    const placeholder = 'Enter your name';
    const name = 'name';
    const value = 'John Doe';
    const setValue = vi.fn();

    // Act
    render(
      <TextField
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        setValue={setValue}
      />,
    );

    // Assert
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveValue(value);
  });

  // Renders a password input field with a toggleable show/hide password button
  it('should render a password input field with a show/hide password button', () => {
    const type = 'password';
    const placeholder = 'Enter your password';
    const name = 'password';
    const value = 'password123';
    const setValue = vi.fn();

    // Act
    render(
      <TextField
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        setValue={setValue}
      />,
    );

    // Assert
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveValue(value);

    const showHideButton = screen.getByRole('button');
    expect(showHideButton).toBeInTheDocument();
  });

  // Toggles the visibility of the password when the show/hide password button is clicked
  it('should toggle the visibility of the password when the show/hide password button is clicked', () => {
    const type = 'password';
    const placeholder = 'Enter your password';
    const name = 'password';
    const value = 'password123';
    const setValue = vi.fn();

    // Act
    render(
      <TextField
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        setValue={setValue}
      />,
    );

    // Assert
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveValue(value);

    const showHideButton = screen.getByRole('button');
    expect(showHideButton).toBeInTheDocument();

    // Toggle password visibility
    fireEvent.click(showHideButton);

    expect(inputElement).toHaveAttribute('type', 'text');

    // Toggle password visibility again
    fireEvent.click(showHideButton);

    expect(inputElement).toHaveAttribute('type', 'password');
  });

  // Renders an input field with no placeholder or name if none are provided
  it('should render an input field with no placeholder or name if none are provided', () => {
    const type = 'text';
    const value = 'John Doe';
    const setValue = vi.fn();

    // Act
    render(<TextField type={type} value={value} setValue={setValue} />);

    // Assert
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).not.toHaveAttribute('placeholder');
    expect(inputElement).not.toHaveAttribute('name');
    expect(inputElement).toHaveValue(value);
  });

  // Renders an input field with a default value of an empty string if none is provided
  it('should render an input field with a default value of an empty string if none is provided', () => {
    const type = 'text';
    const setValue = vi.fn();

    // Act
    render(<TextField type={type} value="" setValue={setValue} />);

    // Assert
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).toHaveValue('');
  });

  // Renders a password input field with a default value of an empty string if none is provided
  it('should render a password input field with a default value of an empty string if none is provided', () => {
    const type = 'password';
    const setValue = vi.fn();

    // Act
    render(
      <TextField
        type={type}
        value=""
        setValue={setValue}
        placeholder="Enter your password"
      />,
    );

    // Assert
    const inputElement = screen.getByPlaceholderText('Enter your password');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
    expect(inputElement).toHaveValue('');
  });
  it('Validate Set State on Type', () => {
    // Initialize a mock function for setValue

    const mockSetValue = vi.fn();

    // Render the TextField component with required props
    render(
      <TextField
        type="text"
        placeholder="Enter text"
        name="textField"
        value="initialValue"
        setValue={mockSetValue}
      />,
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'newInputValue' } });
    expect(mockSetValue).toHaveBeenCalledWith('newInputValue');
  });
});
