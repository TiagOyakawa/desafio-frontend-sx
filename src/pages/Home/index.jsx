import SxLogo from './../../assets/LOGO SX.png'
import './style.css'

function Home() {

    return (
        <div className='container-home'>
            <img src={SxLogo} alt="Logo Sx" className='image' />
            <h1 className='title'>Welcome !</h1>
            <p className='text'>Join millions of players and make new friends! Explore a world of possibilities and become a gaming master. Fun is just a click away.</p>
            <a className='button' href="/games">Play now</a>
        </div>
    )
}

export default Home