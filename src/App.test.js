// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherCore/i);
    expect(titleElement).toBeInTheDocument();
});
