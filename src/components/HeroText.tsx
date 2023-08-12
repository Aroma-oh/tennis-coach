import styled from 'styled-components'

export const HereText = () => {
  return (
    <HereTextStyled>
      <h1 className='thin-text'>BECOME A</h1>
      <h1 className='thin-text'>TENNIS COACH</h1>
    </HereTextStyled>
  )
}

const HereTextStyled = styled.div`
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 100px;
  line-height: 110%;;

  @media (max-width: 500px) {
    font-size: 50px;
  }
`