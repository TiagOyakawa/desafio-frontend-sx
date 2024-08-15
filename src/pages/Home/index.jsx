import SxLogo from './../../assets/LOGO SX.png'
import './style.css'

function Home() {

    return (
        <div className='container-home'>
            <img src={SxLogo} alt="Logo Sx" className='image' />
            <h1 className='title'>Bem vindo !</h1>
            <p className='text'>Junte-se a milhões de jogadores e faça novos amigos! Explore um mundo de possibilidades e torne-se um mestre dos games. A diversão está apenas um clique de distância.</p>
            <a className='button' href="/games">Play now</a>
        </div>
    )
}

export default Home