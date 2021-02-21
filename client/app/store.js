import { configureStore } from '@reduxjs/toolkit'

import playerSlice from './counter/counterSlice'

export default configureStore({
  reducer: {
    player: playerSlice
  }

})
