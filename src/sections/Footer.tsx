import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterStyled>
      <p>㈜비테 대표이사 : 김비테, 이비테 | 서울특별시 종로구 종로1 | 사업자등록번호 : 000-00-00000 | 서울특별시 통신판매업신고번호 : 제 000호 | 대표번호 : 0000-0000  </p>
      <p>Copyright 2023. 오디. All rights reserved.</p>
    </FooterStyled>
  )
}

const FooterStyled = styled.section`
  height: 150px;
  padding: 30px;
  margin: auto;
  color: var(--gray);
  font-weight: 100;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  text-align: center;
  word-break: keep-all;
  line-height: 150%;

  p {
    padding-bottom: 16px;
  }

  @media (max-width: 500px) {
    height: 100px;
  }
`