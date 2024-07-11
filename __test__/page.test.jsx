import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from "../src/app/page";
import HomePage from '@/app/Homepage/page';

 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})

describe('Homepage', () => { 
it ("renders a list", ()=>{
    render(<HomePage/>)

    const list = screen.getAllByRole("list");

    
})

 })

describe('Page', () => { 
it ("renders a paragraph", ()=>{
    render(<Page/>)

    const paragraph = screen.getAllByRole("paragraph");
})    
})