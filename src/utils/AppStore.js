import {configureStore} from "@reduxjs/toolkit"
import AppSlice from "./AppSlice"
import SearchSlice from "./SearchSlice"

const AppStore = configureStore({
reducer : {
  App : AppSlice,
  Search:SearchSlice
}
})

export default AppStore