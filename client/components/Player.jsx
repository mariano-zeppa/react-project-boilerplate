import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, stop, next } from '../app/counter/counterSlice'

const Player = () => {
  const currentAction = useSelector(state => state.player.value)
  const currentSong = useSelector(state => state.player.song)
  const dispatch = useDispatch()

  function playSong () {
    var audio = new Audio('./thesong.mp3')
    audio.play()
    dispatch(play(audio))
  }

  function stopSong (audio) {
    audio.stop(audio)
    dispatch(play())
  }

  return (
    <div >

      <h1 className='pagetitle'>Spoticloud</h1>

      <div className='mainPlayer'>
        <button className='backbutton' onClick={() => stopSong()}>Stop</button>
        <div className="divider"/>
        <button className='playbutton' onClick={() => playSong()}>Play</button>
        <div className="divider"/>
        <button className='nextbutton' onClick={() => dispatch(next('yourtoy'))}>Next</button>
      </div>
      <div className='songplaying'>
        {currentAction}
        {currentSong}
      </div>
      <footer>###</footer>
    </div>
  )
}

export default Player
