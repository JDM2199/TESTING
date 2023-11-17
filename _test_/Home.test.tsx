import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// JUAN DANIEL MAMANI MAMANI -me salia "FAIL" cuando ejecutaba npm test
describe('JUAN DANIEL MAMANI', () => {
it('should have Docs text', () => {
    render(<Home />)//ARRANGE

    const myElem = screen.getByText('Docs')//ACT

    expect(myElem).toBeInTheDocument() //ASERT  

})
})