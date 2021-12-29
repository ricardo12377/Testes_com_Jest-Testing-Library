import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Component from './index'


describe('Component de testes de evento', () => {
    test('deve rodar a função Testing ao clicar', () => {
        render(<Component />);

        const buttonFunction = screen.getByRole('button', {name: /testar/i}); //importar o user-event

        userEvent.click(buttonFunction)
        expect(screen.getByText("testar")).toBeInTheDocument()
    })
})