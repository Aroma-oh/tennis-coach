import styled from 'styled-components'
import { HereText } from './HeroText'
import { Button } from './Button'

const HERO_DATA = [{ info: '서울지점', strong: '10 +' }, { info: '수강생', strong: '1,000 +' }, { info: '시간당 수업료', strong: '50,000 +' },]
export const Hero = () => {
  return (
    <HeroStyled>
      <HereText />
      <Intro>
        <p>쉽고 빠르게 테니스 코치가 되어보세요.</p>
        <p>쾌적한 실내와 자유로운 수업시간으로 편하게 시작하세요.</p>
      </Intro>
      <Table>
        {HERO_DATA.map((el, index) => (
          <Column key={index} index={index + 1}>
            <div>
              <p className='info'>{el.info}</p>
              <p className='strong'>{el.strong}</p>
            </div>
          </Column>
        ))}
      </Table>
      <Button buttonText={'등록하기'} color={true} padding={'24px'}></Button>
    </HeroStyled>
  )
}

const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-family: 'IBMPlexSansKR-Regular';
`

const Intro = styled.div`
  padding-top: 36px;
  font-size: 21px;
  line-height: 150%;
  word-break: keep-all;
  
  @media (max-width: 400px) {
    display: none;
  }
`

const Table = styled.div`
  padding: 36px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* display:table;
  table-layout: fixed;
  border: 1px solid var(--black);

  > :last-child {
    border: none;
  } */

  @media (max-width: 400px) {
    padding: 21px 15px 0 0;
  }
`

interface ColumnProps {
  index: number;
}

const Column = styled.div<ColumnProps>`
  text-align: center;
  /* display: table-cell;
  border-right: 1px solid var(--black); */

  .strong {
    padding: .8rem;
    margin-left: 1rem;
    font-size: 28px;
    font-weight: 600;
  }

  ${({ index }) => index === 1
    ?
    `div {
      padding: 1rem;
      grid-column: 1 / 2;
      border: 1px solid black;
    }`
    :
    `div {
      grid-column: ${index} / ${index + 1};
      padding: 1rem;
      border-top: 1px solid black; 
      border-right: 1px solid black; 
      border-bottom: 1px solid black;   
    }`
  }

  @media (max-width: 400px) {
    div {
        display:inline;
        border: none;
        font-size: 1rem;
    }
    .strong {
      font-size: 21px;
      margin-left: 0rem;
    }
  }
`