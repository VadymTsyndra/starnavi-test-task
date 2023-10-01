import React from "react";
import { Message } from "../interfaces/MessageInterface";

type Props = {
  messages: Message[];
}

export const HoverSquares: React.FC<Props> = ({ messages }) => {
  return (
    <div className="hover-squares">
      <h1>Hover squares</h1>
      <div className="hover-message">
        {messages.map((message) => (
          <p key={message.id}>{message.text}</p>
        ))}
      </div>
    </div>
  );
};
