import styled from 'styled-components'

interface ButtonProps {
  buttonText: string;
  color: boolean;
  padding?: string;
  fonsSize?: number;
}

/**
 * buttonText: string;
 * color: boolean;
 * padding?: string;
 * fonsSize?: number;
 */


export const Button = ({ buttonText, color, padding, fonsSize }: ButtonProps) => {
  return (
    <ButtonStyled color={color} padding={padding} fonsSize={fonsSize}> {buttonText} </ButtonStyled>
  )
}

interface ButtonStyledProps {
  color: boolean;
  padding?: string;
  fonsSize?: number;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  align-items: flex-end;
  padding: ${({ padding }) => padding ? padding : `16px 20px`}; 
  height: 24px;
    
  color: ${({ color }) => color ? 'var(--white, #FFF)' : 'var(--black, #000)'};
  font-size: ${({ fonsSize }) => fonsSize ? `${fonsSize}px` : '16px'};
  line-height: 0px; 

  border: 1px solid var(--black, #000);
  background-color: ${({ color }) => color ? 'var(--black, #000)' : 'var(--white, #FFF)'};
  cursor: pointer;
`