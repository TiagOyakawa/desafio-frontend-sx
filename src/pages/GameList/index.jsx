import './style.css'
import SxLogo from './../../assets/LOGO SX.png'
import MockGameList from '../../mock/gameList.json'

function GameList() {
    const games = MockGameList

    return (
        <div className='container-game-list'>
            <header>
                <img src={SxLogo} alt="Logo Sx" className='header-image' />
                <ul className='menu'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/games">Games</a>
                    </li>
                </ul>
            </header>
            <div class="games">
                {games.map(game => (
                    <div class="game">
                        <img src={game.thumbnail} alt="Logo Sx" className='image' />
                        <h1>{game.title}</h1>
                        <p>{game.publisher}</p>
                        <p>{game.developer}</p>
                        <p>{game.platform}</p>
                        <p>{game.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameList