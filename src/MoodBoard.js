import { MoodBoardItem } from './MoodBoardItem';

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="lightblue"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Relaxing beach"
        />
        <MoodBoardItem
          color="lightgreen"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Open fields"
        />
        <MoodBoardItem
          color="lightyellow"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Santorini views"
        />
      </div>
    </div>
  );
}

