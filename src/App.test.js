import { render, screen } from '@testing-library/react';
import App from './App';


describe('Open the webpage', () => {
  render(<App />);

  it('should have the title printed on the page', async () => {
    const titleElement = screen.getByText('Caffeine Calculator');
    expect(titleElement).toBeInTheDocument();
  });
})