import styled from 'styled-components'
import { RxCalendar } from 'react-icons/rx'
import { LiaHandPointerSolid } from 'react-icons/lia'
import { SlLocationPin } from 'react-icons/sl'

// PiHandTap

const iconStyle = {
  backgroundColor: '#359dd989', // 배경 색상 지정
  padding: '16px',
  borderRadius: '50%',
  fontSize: '28px',
  color: 'white',
};

export const Feature3 = () => {
  return (
    <Feature3Styled>
      <div className='title'>
        <div className='text'> BETE는 번거롭지 않습니다. </div>
        <div className='sub-text'> 간단한 우리만의 수업관리 시스템을 소개합니다.</div>
      </div>
      <div className='info-container'>
        <div className='info'>
          <RxCalendar style={iconStyle} />
          <p className='info-title'>등록</p>
          <p className='info-text'>BETE 앱/홈페이지에 방문하여 가능한 스케쥴을 등록하세요.</p>
        </div>
        <div className='info'>
          <LiaHandPointerSolid style={iconStyle} />
          <p className='info-title'>선택</p>
          <p className='info-text'>수강생과 일치하는 스케쥴을 확인하고 수업 날짜와 시간을 선택하세요.</p>
        </div>
        <div className='info'>
          <SlLocationPin style={iconStyle} />
          <p className='info-title'>방문</p>
          <p className='info-text'>먼길 가지말고 가까운 지점을 방문하여 수업하세요.</p>
        </div>
      </div>
    </Feature3Styled>)

}

const Feature3Styled = styled.section`
  width: 100%;
  word-break: keep-all;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin: 1.8rem 0 ;
    padding: 1.2rem 1.5rem;
    font-weight: 700;
    text-align: center;
    font-size: 24px;
    line-height: 150%;
  }
  .sub-text {
    margin-top: 8px;
    font-size: 21px;
    font-weight: 500;
    color: var(--gray);
  }
  .info-container {
    display: flex;
    justify-content: center;

    width: 85%;
    margin: auto;
  }
  .info {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
  .info-title {
    margin: 24px 0 21px 0;
    font-size: 18px;
    font-weight: 700;
  }
  .info-text {
    text-align: center;
    line-height: 180%;
    color: var(--gray);
  }

  @media (max-width: 800px) {
    .info-container {
      flex-direction: column;
    }
    .info-title {
      display: none;
    }
    .info {
      flex-direction: column;
      width: 100%;
      margin: 1rem 0;
    }
    .info-text {
      margin: 18px 0;
    }
  }
  @media (max-width: 500px){
    .info-container {
      margin: 1rem 0;
    }
    .title {
      margin: 2rem 0 0 0 ;
    }
    .sub-text {
      display: none;
    }
  }
`
