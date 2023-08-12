import styled from 'styled-components'

interface ButtonProps {
  buttonText: string;
  color: boolean;
  padding?: string;
}
export const Button = ({ buttonText, color, padding }: ButtonProps) => {
  return (
    <ButtonStyled color={color} padding={padding}>{buttonText}</ButtonStyled>
  )
}

interface ButtonStyledProps {
  color: boolean;
  padding?: string;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  align-items: flex-end;
  padding: ${({ padding }) => padding ? padding : `16px 20px`}; 
  height: 24px;
    
  color: ${({ color }) => color ? 'var(--white, #FFF)' : 'var(--black, #000)'};
  font-size: 16px;
  line-height: 0px; 

  border: 1px solid var(--black, #000);
  background-color: ${({ color }) => color ? 'var(--black, #000)' : 'var(--white, #FFF)'};
`