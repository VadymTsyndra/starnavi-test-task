import React, { useEffect, useState } from "react";
import { getModes } from "./mode";

import { Select } from "./components/Select";
import { Field } from "./components/Field";
import { HoverSquares } from "./components/HoverSquares";
  
import { Mode } from "./interfaces/ModeInterface";
import { Message } from "./interfaces/MessageInterface";



const App: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>('Pick mode');
  const [modes, setModes] = useState<Mode[]>([]);
  const [markedCells, setMarkedCells] = useState<string[]>([]);
  const [selectedModeConfig, setSelectedModeConfig] = useState<Mode | null>(null);
  const [sizeOfField, setSizeOfField] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSelectMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const currentModeConfig = modes.find(mode => mode.name === selectValue);

    if (!currentModeConfig) return;

    const sizeOfCurrentField = currentModeConfig.field > 15
      ? currentModeConfig.field * 8 + 2
      : currentModeConfig.field * 50 + 2;

    setSizeOfField(sizeOfCurrentField);
    setSelectedModeConfig(currentModeConfig || null);
    setMessages([]);
  }

  const handleMouseEnter = (cell: string) => {
    if (!markedCells.includes(cell)) {
      setMarkedCells([...markedCells, cell]);
      findCoordinates(cell);
    } else {
      const filteredArray = markedCells.filter(markedCell => markedCell !== cell);
      setMarkedCells(filteredArray);
    }
  }

  const findCoordinates = (hoverCell: string) => {
    if (!selectedModeConfig) return;

    const cellIndex = parseInt(hoverCell) - 1;
    const row = Math.floor(cellIndex / selectedModeConfig.field) + 1;
    const column = (cellIndex % selectedModeConfig.field) + 1;

    const newMessage = `row ${row} col ${column}`;
    const messageId = Date.now();

    setMessages([...messages, { id: messageId, text: newMessage }]);

    setTimeout(() => {
      setMessages(prevMessages =>
        prevMessages.filter(message => message.id !== messageId)
      );
    }, 3000);
  };

  useEffect(() => {
    getModes()
      .then(setModes)
      .catch(console.log)
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Select
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          modes={modes}
          handleSelectMode={handleSelectMode}
        />

        {selectedModeConfig && (
          <Field
            sizeOfField={sizeOfField}
            selectedModeConfig={selectedModeConfig}
            markedCells={markedCells}
            handleMouseEnter={handleMouseEnter}
          />
        )}
      </div>

      <HoverSquares messages={messages} />
    </div>
  );
}

export default App;
