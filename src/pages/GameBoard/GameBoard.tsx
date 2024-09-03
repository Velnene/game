import { useGameStore } from '../../store/game.store'

export function GameBoard() {
	const { player, opponent, playCard } = useGameStore()

	const calculateRotationOpponents = (index: number, total: number) => {
		const middle = (total - 1) / 2
		return -(index - middle) * 10
	}

	const calculateRotationPlayer = (index: number, total: number) => {
		const middle = (total - 1) / 2
		return (index - middle) * 10
	}

	return (
		<>
			<h1>Hi</h1>{' '}
			<div>
				<div>
					<h2>Opponent</h2>
					<p>HP: {opponent.health}</p>
					<p>Mana: {opponent.mana}</p>
				</div>
				<div className='flex justify-center -mt-44'>
					{opponent.deck
						.filter((card) => !card.isOnBoard)
						.slice(0, 5)
						.map((card, index, arr) => (
							<button
								className='h-60 w-40 bg-yellow-300 inline-block shadow -ml-4 rounded-lg'
								style={{
									transform: `rotate(${calculateRotationOpponents(index, arr.length)}deg)`,
								}}
								key={card.id}
								onClick={() => {
									console.log(card)
									playCard(card.id)
								}}
							>
								<img
									alt={card.name}
									src={require('../../../public/assets/cards/exemple.jpg')}
								/>
								text2
							</button>
						))}
				</div>
			</div>
			<section>
				{opponent.deck
					.filter((card) => card.isOnBoard)
					.map((card) => (
						<button
							className='h-40 w-60 bg-yellow-300 inline-block shadow mx-1 rounded-lg'
							key={card.id}
						>
							<img
								alt={card.name}
								src={require('../../../public/assets/cards/exemple.jpg')}
							/>
						</button>
					))}

				<hr />
				{player.deck
					.filter((card) => card.isOnBoard)
					.map((card) => (
						<button
							className='h-40 w-60 bg-yellow-300 inline-block shadow mx-1 rounded-lg'
							key={card.id}
						>
							<img alt={card.name} src={card.imageUrl}></img>
						</button>
					))}
			</section>
			<div>
				<h2>Player</h2>
				<p>HP: {player.health}</p>
				<p>Mana: {player.mana}</p>
			</div>
		</>
	)
}
