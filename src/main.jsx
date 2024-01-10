import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import meempng from './images/meem.png'

const root = ReactDOM.createRoot(document.getElementById('root'))
const arr = ['10 Guy', '1950s Middle Finger', '1990s First World Problems', '1st World Canadian Problems', '2nd Term Obama', 'Aaaaand Its Gone', 'Ace Primo', 'Actual Advice Mallard', 'Adalia Rose', 'Admiral Ackbar Relationship Expert', 'Advice Dog', 'Advice Doge', 'Advice God', 'Advice Peeta', 'Advice Tam', 'Advice Yoda', 'Afraid To Ask Andy', 'Afraid To Ask Andy Closeup', 'Aint Nobody Got Time For That', 'Alan Greenspan', 'Alarm Clock', 'Albert Cagestein', 'Albert Einstein 1', 'Alien Meeting Suggestion', 'Alright Gentlemen We Need A New Idea', 'Always Has Been', 'Alyssa Silent Hill', 'Am I The Only One Around Here', 'American Chopper Argument', 'Ancient Aliens', 'And everybody loses their minds', 'And then I said Obama', 'Angry Asian', 'Angry Baby', 'Angry Birds Pig', 'Angry Bride', 'Angry Chef Gordon Ramsay', 'Angry Chicken Boss', 'Angry Dumbledore', 'Angry Koala', 'Angry Rant Randy', 'Angry Toddler', 'Annoying Childhood Friend', 'Annoying Facebook Girl', 'Anri Stares', 'Anti Joke Chicken', 'Apathetic Xbox Laser', 'Archer', 'Are Your Parents Brother And Sister', 'Are you a Wizard', 'Arrogant Rich Man', 'Art Attack', 'Art Student Owl', 'Arthur Fist', 'Asshole Ref', 'Aunt Carol', 'Austin Powers Honestly', 'Aw Yeah Rage Face', 'Awkward Moment Sealion', 'Awkward Olympics', 'BANE AND BRUCE', 'BM Employees', 'Babushkas On Facebook', 'Baby Cry', 'Baby Godfather', 'Baby Insanity Wolf', 'Back In My Day', 'Bad Advice Cat', 'Bad Joke Eel', 'Bad Luck Bear', 'Bad Luck Brian', 'Bad Luck Hannah', 'Bad Pun Anna Kendrick', 'Bad Pun Dog', 'Bad Wife Worse Mom', 'Bah Humbug', 'Bane', 'Bane Permission', 'Barack And Kumar 2013', 'Barba', 'Barbosa And Sparrow', 'Barney Stinson Win', 'Baromney', 'Baron Creater', 'Bart Simpson Peeking', 'Batman And Superman', 'Batman Slapping Robin', 'Batman Smiles', 'Batmobile', 'Bazooka Squirrel', 'Be Like Bill', 'Bear Grylls', 'Beard Baby', 'Bebo', 'Because Race Car', 'Ben Barba Pointing', 'Bender', 'Benito', 'Bernie I Am Once Again Asking For Your Support', 'Beyonce Knowles Superbowl']


function Head() {

    return (
        <nav>
            <div className='left'>
                <img src={meempng}></img>
                <div>Meme Generator</div>
            </div>
            <div className='right'>
                React-Course-project 3
            </div>
        </nav>
    )
}


function Body() {
    const [input, setinput] = React.useState({});
    const [api, setapi] = React.useState("http://apimeme.com/meme?meme=10-Guy&top=Top+text&bottom=Bottom+text");

    function HandleChange(e) {
        setinput({ ...input, [e.target.name]: e.target.value })
    }


    return (
        <div className='body'>
            <div className='input'>

                <input type='text' placeholder='Top text' onChange={(e) => HandleChange(e)} name="top-text" ></input>
                <input type='text' placeholder='Bottom text' onChange={(e) => HandleChange(e)} name="bottom-text" ></input>
            </div>  

            <button onClick={() => {
                let num=Math.floor(Math.random()*arr.length);
                setapi(`http://apimeme.com/meme?meme=${arr[num]}&top=${input['top-text']}&bottom=${input['bottom-text']}`)
            }}>Get a New Meme Image 🖼️</button>
            <img src={api}></img>
        </div>
    )
}








function App() {

    return (
        <>
            <Head />
            <Body />

        </>
    )
}




root.render(<App />)