The project is a web application created using the React library. The application allows the user to select a game mode, and then displays a game board where the mouse cursor can be hovered over cells. On hovering over a cell, the application displays row and column information of that cell.

The following components are used in the project:

App: This component represents the main application. It implements the logic of selecting the game mode, displaying the playing field, and displaying messages when hovering over cells.

Select: This component represents the game mode selection form. It displays a drop-down list with available modes and a "START" button to start the game.

Field: This component displays the playing field. It creates squares representing cells and tracks mouse hovering over them.

HoverSquares: This component displays messages that appear when you hover over the cells of the playing field. The messages disappear after a period of time.

The useState is used to handle data about game modes, selected cells, and messages. The useEffect component is used to retrieve the list of game modes from a remote server when the application is launched.

To run the project, you need to follow these steps:

Make sure you have Node.js and npm (or yarn) installed.

In the root folder of your project, run the npm install (or yarn install) command to install all project dependencies.

Start the project using the npm start (or yarn start) command.

Open a browser and go to http://localhost:3000 to start using the application.

The project also uses TypeScript for stricter typing of data and components.
