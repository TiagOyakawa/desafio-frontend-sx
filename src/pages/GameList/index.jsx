import './style.css'
import SxLogo from './../../assets/LOGO SX.png'
import IconBack from './../../assets/VOLTAR-BOTAO.svg'
import MockGameList from '../../mock/gameList.json'

function GameList() {
    const games = MockGameList

    return (
        <div className='container-game-list'>
            <header>
                <a href="/">
                    <img src={SxLogo} alt="Logo Sx" className='header-image' />
                </a>
                <a href="/" className='button button--small' >
                    <img src={IconBack} alt="link to return to home screen" className='header-icon' />
                </a>
            </header>
            <div className='describe'>
                <h1>
                    Game List
                </h1>
                <p>
                    Come and discover new exciting games for your lives!
                </p>
                <p>
                    Perfect for streamers looking for fresh, engaging content.
                </p>
            </div>
            <div className="games">
                {games.map(game => (
                    <a href={`/games/detail/${game.id}`}>
                        <div className="game" key={game.id}>
                            <img src={game.thumbnail} alt={`Game Thumbnail ${game.title}`} className='image' />
                            <h1>{game.title}</h1>
                            <p>{game.publisher}</p>
                            <p>{game.developer}</p>
                            <p>{game.platform}</p>
                            <p>{game.genre}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default GameList