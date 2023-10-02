import React from "react";
import { IMode } from "../interfaces/ModeInterface";

type Props = {
  sizeOfField: number;
  selectedModeConfig: IMode | null;
  markedCells: string[];
  handleMouseEnter: (cell: string) => void;
}

export const Field: React.FC<Props> = ({
  sizeOfField,
  selectedModeConfig,
  markedCells,
  handleMouseEnter
}) => {
  const customizedField = selectedModeConfig && Array.from({ length: selectedModeConfig.field * selectedModeConfig.field }, (_, index) => {
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
  });

  return (
    <div className='field' style={{width: sizeOfField, height: sizeOfField}}>
      {customizedField}
    </div>
  );
};
