import {configureStore} from "@reduxjs/toolkit"
import AppSlice from "./AppSlice"

const AppStore = configureStore({
reducer : {
  App : AppSlice
}
})

export default AppStore