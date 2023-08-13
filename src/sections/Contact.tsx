import styled from 'styled-components'
import { useInput } from 'hooks/useInput'
import { Button } from 'components/Button'
export const Contact = () => {
  const [name, handleName] = useInput('');
  const [phone, handlePhone] = useInput('');

  return (
    <ContactStyled>
      <h1 className='bete'>Become A Tennis Coach</h1>
      <p className='sub-head'>지금 바로 테니스 코치가 되어보세요.</p>
      <form>
        <div className='input-container'>
          <p className='input-type'>이름</p>
          <input
            id='name'
            type='text'
            placeholder='김비테'
            value={name}
            onChange={handleName}
          />
        </div>
        <div className='input-container'>
          <p className='input-type'>연락처</p>
          <input
            id='phone'
            type='text'
            placeholder='010-0000-0000'
            value={phone}
            onChange={handlePhone}
          />
        </div>
        <Button buttonText='등록하기' color={true} padding='18px 48px' />
      </form>
    </ContactStyled>
  )
}

const ContactStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    font-weight: 600;
    text-align: center;
  }
  .sub-head {
    font-size: 24px;
    font-weight: 600;
    color: var(--gray);
    padding: 36px 24px 58px 24px;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 24px 0 24px;
  }
  .input-type {
    width: 60px;
    font-size: 18px;
  }
  input {
    width: 300px;
    height: 40px;
    border: 1px solid black;
    padding-left: 16px;
  }
  button {
    margin: 32px 0 5rem;
  }
`