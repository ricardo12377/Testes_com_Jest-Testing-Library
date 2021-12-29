import Calculadora from "./calculadora";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora component', () => {
    test('deve ter o numero 0', () => {
        render(<Calculadora />);

        const itemRender = screen.getByText('0')    //se nao achar o valor, ele quebra e para o test.
        //const buttonName = screen.findByText('0')   
        // const buttonName = screen.queryByText('0') // ele procura mas se nao achar, ele continua o processo

        expect(itemRender).toBeInTheDocument();
    })

    test('deve conter a classe container na div', () => {
        render(<Calculadora />);

        const itemRender = screen.getByText('1')    

        expect(itemRender).toHaveClass('container');
    })

    test('Não deve conter valor quando iniciado', () => {
        render(<Calculadora />);

        const itemRender = screen.getByText('oni')    

        expect(itemRender).not.toHaveClass('title');
    })

    test('Deve conter um botão enviar', () => {
        render(<Calculadora />);

        const buttonEnviar = screen.getByRole('button', {name: /enviar/i})
                                  //getByAllRole caso queira pegar todos.

        expect(buttonEnviar).toBeInTheDocument();
    })

    test('Deve conter uma classe', () => {
        render(<Calculadora />);

        const buttonEnviar = screen.getByRole('button', {name: /enviar/i})
                                  //getByAllRole caso queira pegar todos.

        expect(buttonEnviar).toHaveClass('button');
       
    })
})