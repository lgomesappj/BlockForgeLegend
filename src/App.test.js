// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockForgeLegend title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockForgeLegend/i);
    expect(titleElement).toBeInTheDocument();
});
