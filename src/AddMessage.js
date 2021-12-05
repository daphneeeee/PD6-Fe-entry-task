import { useState } from "react";
import { v4 } from "uuid";

const AddMessage = ({ add, submittingStatus }) => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  function nameChange(e) {
    setName(e.target.value);
  }
  function msgChange(e) {
    setMsg(e.target.value);
  }
  function updateMessage() {
    submittingStatus.current = true;
    add(function (preData) {
      return [...preData, { id: v4(), name, msg }];
    });
  }

  return (
    <div>
      <form className="comment">
        <p id="name">Name</p>
        <input type="text" value={name} onChange={nameChange} />
        <p id="msg">Messages</p>
        <input type="text" value={msg} onChange={msgChange} />
        <p><button className="send-btn" onClick={updateMessage} >SEND</button></p>
      </form>
    </div>
  );
};

export default AddMessage;