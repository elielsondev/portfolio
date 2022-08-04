import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testando o portifolio:', () => {
  it('Existe a frase: `hello recruiter` na página.', () => {
    render(<App />);
  
    const linkElement = screen
      .getByRole('heading', { name: /hello recruiter/i });
  
    expect(linkElement).toBeInTheDocument();
  });
});

