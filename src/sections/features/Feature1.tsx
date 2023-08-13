import styled from 'styled-components'

const FEATURE1_DATA = [
  { text: '쾌적한 실내 테니스장', feature: '쾌적함', subText: '쾌적하게 관리되는 실내 테니스장에서 편하게 수업하세요. 날씨에 구애 받지 않고 365일 원하는 날짜에 수업이 가능합니다.' },
  { text: '자유로운 수업시간', feature: '자유로움', subText: 'BETE 제휴 지점은 365일, 24시간 영업합니다. 수강생과 자유롭게 수업시간을 정하고 편한 시간에 방문하세요.' },
  { text: '맞춤 수강생 매칭', feature: '편안함', subText: '설문을 통해 라이프스타일, 생활패턴이 유사한 수강생과 매칭됩니다. 맞추기 위한 불편함을 감수하지 마세요.' },
]
export const Feature1 = () => {
  return (
    <Feature1Styled>
      <div className="left">
        <img src='feature2.png' />
        <p> <span className='bete'>Bete</span>의 특별함을 소개합니다</p>
      </div>
      <div className="right">
        {FEATURE1_DATA.map((el, index) => (
          <div key={index} className='info'>
            <div className='feature'><img src='sparkle.png' width='18px' /> {el.feature}</div>
            <p className='text'> {el.text}</p>
            <p className='sub-text'>{el.subText}</p>
          </div>
        ))}
      </div>

    </Feature1Styled>
  )
}

const Feature1Styled = styled.section`
  margin: 6vh 0;
  width:100%;

  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;

  .left {
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width:80%;
      height: 50%;
      padding: 32px;
    }
    p {
      text-align: center;
      padding: 0 24px;
      font-size: 28px;
    }
    span {
      font-size: 28px;
    }
  }
  .right {
    flex: 1 1 60%;
    border-left: 1px solid var(--black);
    padding-left: 1.5rem;
    > :last-child {
        padding-bottom: 21px;
      }
  }
  .info {
    padding: 12px 28px;
    .text {
      font-size: 28px;
      font-weight: 500;
      padding: 16px 0;
    }
    .feature {
      display: flex;
      font-weight: 500;
      width: fit-content;
      padding: 4px 8px;
      background-color: var(--white);
      border: solid black 1px;
      img {
        margin-right: 4px;
      }
    }
    .sub-text {
      font-size: 18px;
      line-height: 140%;
      word-break: keep-all;
      font-weight: 400;
      color: var(--gray);
    }
  }  


  @media (max-width: 800px) {
    flex-direction: column;
  
    .left {
      margin-bottom: 36px;
    }
    .right {
      border-top: 1px solid var(--black);
      border-left: none;
      padding-top: 18px;
      padding-left: 0;
    }
    .info {
      .text {
        font-size: 24px;
      }
      .sub-text {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 500px) {
    .right {
      border-top: none;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 28px;
    }
    .sub-text {
      text-align: center;
    }
  }
`