import { render, screen } from '@testing-library/react';
import App from '../../App';


describe('Open the webpage', () => {
  render(<App />);

  describe('Render the title', () => {
    const titleElement = screen.getByText('Caffeine Calculator');

    it('should have the title printed on the page', async () => {
      expect(titleElement).toBeInTheDocument();
    });
  });
});