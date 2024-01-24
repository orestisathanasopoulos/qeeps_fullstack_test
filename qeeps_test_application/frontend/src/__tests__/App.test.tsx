import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import { App } from '../App';

describe('Testing the <App> component', () => {
  test('renders navbar', async () => {
    render(<App />);
    const linkElement = screen.getByText(/accueil/i);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href');
  });
});
