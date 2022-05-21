import NoteItem from './NoteItem';

export default function NoteList({ notes }) {
  
  if(!notes) return null;

  return (
    <ul>
      <li>
        <span>Date</span>
        <span>Title</span>
        <span>Owner</span>
        <span></span>
      </li>

      {notes.map(note => {
        return (
          <NoteItem 
            key={note.id} 
            note={note}
          />
        );
      })}
    </ul>
  );
}