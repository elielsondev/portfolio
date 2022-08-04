import { render, screen } from '@testing-library/react';
import Welcome from '../App';

describe('Testando o componente Welcome:', () => {
  it('Existe um texto de boas vindas.', () => {
    render(<Welcome />);

    const welcome = screen.getByRole('heading', { name: /bem vindo/i});

    expect(welcome).toBeInTheDocument();
  });

  it('Existe um texto de área de atuação.', () => {
    render(<Welcome />);

    const job = screen.getByRole('heading', { name: /desenvolvedor front-end/i});

    expect(job).toBeInTheDocument();
  });
});