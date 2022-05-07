import { render, screen } from '@testing-library/react';
import Header from "../../components/header";

describe('Header tests', () => {
  const title = "A beautiful title"

  it('should display the title', async () => {
    render(<Header title={title} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  });
});