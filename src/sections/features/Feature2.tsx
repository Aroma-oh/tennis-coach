import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'
export const Feature2 = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => (
    window.addEventListener('resize', handleResize)
  ), [])

  const numImages = Math.floor((windowWidth) / 94);

  return (
    <Feature2Styled>
      <p><span>10 + </span> 회사와의 제휴로 안정적인 수강생 확보</p>
      <Flow>
        {Array.from({ length: numImages * 2 }).map((_, index) => (
          <img
            key={index}
            src='public/Logo.png'
            width='60px'
            alt={`Logo ${index}`}
          />
        ))}
      </Flow>
    </Feature2Styled>
  )
}

const Feature2Styled = styled.section`
  padding: 21px 0 ;
  margin: 10rem 0 5rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 21px;
  font-weight: 400;
  word-break: keep-all;
  text-align: center;
  color: var(--gray);

  overflow-x: hidden; 
  position: relative;
  background: linear-gradient(90deg, rgba(240,248,255,1) 0%, rgba(140,35,35,0) 20%, rgba(215,195,200,0) 80%, rgba(240,248,255,1) 100%);
  
  span {
    font-size: 28px;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    margin: 5rem 0 1rem 0;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 0;
    span {
    font-size: 16px;
    font-weight: 600;
  }
  }
`


const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const Flow = styled.div`
  display: flex;
  align-items: center;
  width: 200%; 
  animation: ${flowing} 10s linear infinite;
  margin: 36px 0;
  z-index: -10;


  img {
    margin-right: 28px;
    padding: 8px 16px;
    border: 1px solid #454545;
    background-color: #ffffff5b;
  }
`;
