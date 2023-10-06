import { FooterCard } from './FooterCard'
import { HeaderCard } from './HeaderCard'
import { MainCard } from './MainCard'

export const Card = ({ cardInfo }) => {
  return (
    <article className={ cardInfo.theme }>
      <HeaderCard imageHeader={ cardInfo.image } />
      <MainCard title={ cardInfo.title } pharagraph={ cardInfo.pharagraph } />
      <FooterCard />
    </article>
  )
}
