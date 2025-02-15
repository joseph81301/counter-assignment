// import necessary react testing library helpers here
// import the Counter component here
import Counter from '../components/Counter';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  const addedCount = screen.getByText(/1/i);
  expect(addedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'));
  const minusCount = screen.getByText(/-1/i);
  expect(minusCount).toBeInTheDocument();
});
