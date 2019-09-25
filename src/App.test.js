import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {

  it('renders a form for a new post', () => {
    const { getByText } = render(<App />)

    expect(getByText(/add post/i)).toBeInTheDocument()
  })
})
