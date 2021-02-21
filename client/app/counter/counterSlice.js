import { createSlice } from '@reduxjs/toolkit'

const PLAYINGSTATE = 'playing'
const STOPSTATE = 'stop'
const NEXTSTATE = 'next'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    value: STOPSTATE,
    song: '',
    audio: ''

  },
  reducers: {
    play: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = PLAYINGSTATE
      state.audio = action.payload
    },
    stop: state => {
      state.value = STOPSTATE
    },
    next: (state, action) => {
      state.value = NEXTSTATE
      state.song = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { play, stop, next } = playerSlice.actions

export default playerSlice.reducer
