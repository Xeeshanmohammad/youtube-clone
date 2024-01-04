import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import generateRandomName, { makeRandomMessage } from "../utils/helper";

function LiveChat() {
  const messageChat = useSelector((store) => store.Chat.messages);
  const [liveChat, setLiveChat] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + "❗",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-[26rem] h-[26rem] p-2 my-5 border border-black rounded-lg bg-slate-100  overflow-y-scroll flex flex-col-reverse">
        <div>
          {messageChat.map((s, i) => (
            <ChatMessage key={i} name={s.name} message={s.message} />
          ))}
        </div>
      </div>
      <form
        className="ml-2 w-[26rem]  p-2  border border-black"
        onSubmit={(e) => {
            // console.log("Form submitted")
            // console.log("Event:", e);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "zeeshan",
              message: liveChat,
            })
            );
            setLiveChat("")
        }}
      >
        <input
          className="w-[18rem] px-2 border"
          type="text"
          value={liveChat}
          onChange={(e) => {
            setLiveChat(e.target.value)}
          }
        />
        <button className="rounded bg-blue-300 p-2 mx-5 font-bold">
          submit
        </button>
      </form>
    </>
  );
}

export default LiveChat;
