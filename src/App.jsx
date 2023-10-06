import { Card } from './components/Card'
import { cards } from './data/cards'

import './index.css'

export const App = () => {
  return (
    <main>
      {
        cards.map( ( cardInfo ) => (
          <Card cardInfo={ cardInfo } />
        ) )
      }
    </main>
  )
}
