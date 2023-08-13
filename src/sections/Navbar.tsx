import styled from 'styled-components'
import { Button } from 'components/Button';
interface NavbarProps {
  brandName: string;
  buttonText: string;
}
export const Navbar = ({ brandName, buttonText }: NavbarProps) => {
  return (
    <NavbarStyled>
      <h1 className='title'>{brandName}</h1>
      <div className='button'>
        <Button buttonText={buttonText} color={false} padding='21px 18px' />

      </div>
    </NavbarStyled>)
}

const NavbarStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 94px;
  padding: 0px 64px;

  border-bottom: 1px solid var(--black);

  @media (max-width: 500px) {
    justify-content: center;
    .button {
      display: none;
    }
  }
`