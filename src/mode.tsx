import { Mode } from "./interfaces/ModeInterface";

export function getModes(): Promise<Mode[]> {
  return fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    })
    .then((data: Mode[]) => data);
}
