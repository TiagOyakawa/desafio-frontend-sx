import './style.css'
import SxLogo from './../../assets/LOGO SX.png'
import IconBack from './../../assets/VOLTAR-BOTAO.svg'
import MockGameDetail from '../../mock/gameDetail.json'

function GameDetail() {
    const game = MockGameDetail

    return (
        <div className='container-game-list'>
            <header>
                <a href="/">
                    <img src={SxLogo} alt="Logo Sx" className='header-image' />
                </a>
                <a href="/games" className='button button--small' >
                    <img src={IconBack} alt="link to return to home screen" className='header-icon' />
                </a>
            </header>
            <div className='describe'>
                <h1>
                    Game Detail
                </h1>
                <p>
                    Start your game !
                </p>
            </div>
            <div className="game-detail">
                <div className="game" key={game.id}>
                    <img src={game.thumbnail} alt={`Game Thumbnail ${game.title}`} className='image game-image--animation' />
                    <div className="game-text">
                        <h1>{game.title}</h1>
                        <p>Status: {game.status}</p>
                        <div dangerouslySetInnerHTML={{ __html: game.description }} />
                        <p>Genre: {game.genre}</p>
                        <p>Platform: {game.platform}</p>
                        <p>Publisher: {game.publisher}</p>
                        <p>Developer: {game.short_developer}</p>
                        <p>Release date: {game.release_date}</p>
                        <p>
                            Minimum system requirements:
                            OS: {game.minimum_system_requirements.os},
                            Processor: {game.minimum_system_requirements.processor},
                            Memory: {game.minimum_system_requirements.memory},
                            Storage: {game.minimum_system_requirements.storage},
                            Graphics: {game.minimum_system_requirements.graphics}
                        </p>
                    </div>
                    <img src={game.screenshots[0].image} />
                    <img src={game.screenshots[1].image} />
                    <img src={game.screenshots[2].image} />
                    <img src={game.screenshots[3].image} />
                </div>
            </div>
        </div>
    )
}

export default GameDetail