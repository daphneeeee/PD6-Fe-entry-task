const Message = ({ messages }) => {

  return (
    <div>
      {messages.map( (message) => {
        const { name, msg, id } = message;
        return (
          <div className="msg" key={id}>
            <p id="name">{name}</p>
            <p id="text">{msg}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
