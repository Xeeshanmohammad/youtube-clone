import {configureStore} from "@reduxjs/toolkit"
import AppSlice from "./AppSlice"
import SearchSlice from "./SearchSlice"
import ChatSlice from "./ChatSlice"

const AppStore = configureStore({
reducer : {
  App : AppSlice,
  Search:SearchSlice,
  Chat:ChatSlice
}
})

export default AppStore