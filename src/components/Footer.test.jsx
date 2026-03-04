import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders correct church name with proper spelling', () => {
  render(<Footer />);
  // Expect the correctly spelled name (this will fail because Footer has a typo)
  expect(screen.getByText(/St\. Ignatius of Loyola Church/i)).toBeInTheDocument();
});
