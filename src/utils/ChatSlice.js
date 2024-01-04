import { createSlice } from "@reduxjs/toolkit";
import { Live_Chat } from "./Constants";

const ChatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, actions) => {
      state.messages.splice(Live_Chat, 5);

      // state.messages.unshift(actions.payload);
      state.messages.push(actions.payload);
    },
  },
});

export const { addMessage } = ChatSlice.actions;

export default ChatSlice.reducer;
