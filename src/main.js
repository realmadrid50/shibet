import React from 'react'
import './main.css'
import Arbitrum from './media/shib.svg'
import Twitter from './socials-twitter.svg'
import Telegram from './socials-telegram.svg'
import Discord from './socials-discord.svg'
import Medium from './socials-medium.svg'



function main() {

    const openTwitter = () => {
        window.open("https://twitter.com/ShibetCasino");
    }

    const tweet = () => {
        window.open("https://twitter.com/intent/tweet?text=Risk%20it%20all%20on%20%40ShibetCasino%20with%20%24SHIBET%20%F0%9F%8E%B2&")
    }
    const telegram = () => {
        window.open("https://t.me/ShibetCasino")
    }

  return (
    <div className='wrap'>

        <div className='title'>
            <h1>SHIBET CASINO</h1>
        </div>

        <div className='paragraph'>
            <p>Join the $SHIBET industry launching soon on Shibarium</p>
        </div>

        <div className='buts'>
            <button onClick={tweet}>Proof of $SHIBET</button>
            
        </div>

        <div className='little-title'>
            <p>NETWORKS SUPPORTED</p>
            <div className='picture'>
                <img src={Arbitrum}></img>
            </div>
        </div>

        <ul className='socials'>
            <li onClick={openTwitter}>
                <img src={Twitter}></img>
            </li>
            <li>
                <img src={Telegram} onClick={telegram}></img>
            </li>
            {/* <li>
                <img src={Discord}></img>
            </li> */}
        </ul>
    </div>
  )
}

export default main