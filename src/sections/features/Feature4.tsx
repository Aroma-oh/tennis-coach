import styled from 'styled-components'

export const Feature4 = () => {
  return (
    <Feature4Styled>
      <div className='title'><img src='public/sparkle.png' width={24} />&nbsp;시설 미리보기</div>
      <div className='image-container'>
        <div
          className='image'
          style={{ backgroundImage: `url('image2.png')` }} />
        <div
          className='image'
          style={{ backgroundImage: `url('image1.png')` }} />
      </div>

    </Feature4Styled>
  )
}

const Feature4Styled = styled.section`
  width: 100%;
  margin: 8rem 0;

  .title {
    font-size: 21px;
    font-weight: 500;
    padding: 12px 18px;
    border: 1px solid black;
    width: fit-content;

    display: flex;
    align-items: center;
  }
  .image-container {
    margin-top: 24px;
    height: 400px;
    display: flex;
  }
  .image {
    display: block;
    width: 50vw;
    height: 40vh;
    margin-right: 12px;
    border: 1px solid black;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 500px) {
    display: none;
  }
`