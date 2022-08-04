import { fireEvent, render, screen } from '@testing-library/react';
import Header from './App';

// eslint-disable-next-line no-undef
describe('Testando o portifolio:', () => {
  // eslint-disable-next-line no-undef
  it('Existe meu nome `Elielson Nascimento` na página.', () => {
    render(<Header />);
  
    const myName = screen.getByText(/elielson nascimento/i)
  
    expect(myName).toBeInTheDocument();
  });

  it('Existem três imagens para idiomas.', () => {
    render(<Header />);

    const portuguese = screen.getByRole('img', {
      name: /português/i
    });

    const english = screen.getByRole('img', {
      name: /english/i
    });

    const spanish = screen.getByRole('img', {
      name: /español/i
    });

    expect(portuguese).toBeInTheDocument();
    expect(english).toBeInTheDocument();
    expect(spanish).toBeInTheDocument();
  });

  it('A aplicação inicia com idioma em Português.', () => {
    render(<Header />);
    
    const about = screen.getByRole('link', {
      name: /sobre/i
    });

    const skills = screen.getByRole('link', {
      name: /habilidades/i
    });

    const projects = screen.getByRole('link', {
      name: /projetos/i
    });

    const contact = screen.getByRole('link', {
      name: /contato/i
    });

    expect(about).toBeInTheDocument();
    expect(skills).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  it('Ao selecionar o Inglês o idioma é alterado.', () => {
    render(<Header />);

    fireEvent.click(screen.getByRole('img', {
      name: /english/i
    }))
    
    const about = screen.getByRole('link', {
      name: /about/i
    });

    const skills = screen.getByRole('link', {
      name: /skills/i
    });

    const projects = screen.getByRole('link', {
      name: /projects/i
    });

    const contact = screen.getByRole('link', {
      name: /contact/i
    });

    expect(about).toBeInTheDocument();
    expect(skills).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  it('Ao selecionar o Espanhol o idioma é alterado.', () => {
    render(<Header />);

    fireEvent.click(screen.getByRole('img', {
      name: /español/i
    }))
    
    const about = screen.getByRole('link', {
      name: /sobre/i
    });

    const skills = screen.getByRole('link', {
      name: /habilidades/i
    });

    const projects = screen.getByRole('link', {
      name: /proyectos/i
    });

    const contact = screen.getByRole('link', {
      name: /contacto/i
    });

    expect(about).toBeInTheDocument();
    expect(skills).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });
});

