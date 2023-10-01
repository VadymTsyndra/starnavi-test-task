import React from "react";
import { Mode } from "../interfaces/ModeInterface";

type Props = {
  sizeOfField: number;
  selectedModeConfig: Mode | null;
  markedCells: string[];
  handleMouseEnter: (cell: string) => void;
}

export const Field: React.FC<Props> = ({
  sizeOfField,
  selectedModeConfig,
  markedCells,
  handleMouseEnter
}) => {
  return (
    <div className='field' style={{width: sizeOfField, height: sizeOfField}}>
      {selectedModeConfig && sizeOfField && Array.from({ length: selectedModeConfig.field * selectedModeConfig.field }, (_, index) => {
        const cellNumber = String(index + 1);
        const isCellMarked = markedCells.includes(cellNumber);
        const cellStyle = isCellMarked ? 'rgb(67, 181, 219)' : 'white';

        const currentField = selectedModeConfig.field;
        const sizeOfSquare = (sizeOfField - 2) / currentField;

        return (
          <div
            key={index}
            className="square"
            style={{ background: cellStyle, width: sizeOfSquare, height: sizeOfSquare }}
            onMouseEnter={() => handleMouseEnter(cellNumber)}
          />
        );
      })}
    </div>
  );
};
