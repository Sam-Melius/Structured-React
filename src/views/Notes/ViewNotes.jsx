import { Link } from 'react-router-dom';
import { useNotes } from '../../hooks/notes';
import NoteList from '../../components/Notes/NoteList';


export default function ViewNotes() {
    const { notes } = useNotes();
  
    return (
      <div>
        <h1>Notes List Page</h1>
  
        <Link to="/notes/add">
          <button>Add a New Note</button>
        </Link>
        
        <NoteList notes={notes}/>
      </div>  
    );
}
