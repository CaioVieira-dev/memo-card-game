import cardBack from '../../assets/cardBack.png'
import { useGame } from '../../hooks/useGame'
import { CardObject, GameCard, Image } from './styles'

type CardProps = {
  fruit: string;
  cardState: 'hidden' | 'visible' | 'done';
  cardId: string;
}

export function Card(props: CardProps) {
  const { handleCardToFlip } = useGame();

  function handleFlip() {
    handleCardToFlip({
      id: props.cardId,
      fruit: props.fruit,
      cardState: props.cardState
    })

  }

  return (
    <GameCard
      className={props.cardState === 'visible' || props.cardState === 'done' ? "flipped" : ""} >
      <CardObject
        className={props.cardState === 'visible' || props.cardState === 'done' ? "flipped" : ""}
        onClick={handleFlip}
      >
        <Image src={cardBack}></Image>
        <Image src={props.fruit}></Image>
      </CardObject>
    </GameCard>
  )
}