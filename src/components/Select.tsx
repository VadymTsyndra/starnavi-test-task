import React from "react";
import { Mode } from "../interfaces/ModeInterface";

type Props = {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  modes: Mode[];
  handleSelectMode: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Select: React.FC<Props> = ({
  selectValue,
  setSelectValue,
  modes,
  handleSelectMode
}) => {
  return (
    <form className="form">
      <select
        className="select"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="Pick mode" disabled>Pick mode</option>
        {modes.map((mode) => (
          <option key={mode.id}>{mode.name}</option>
        ))}
      </select>

      <button
        className="button"
        onClick={handleSelectMode}
      >
        START
      </button>
    </form>
  );
};
