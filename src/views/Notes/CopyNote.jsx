import { Link, useParams, useHistory } from 'react-router-dom';
import { useNote, useNotes } from '../../hooks/notes';
import NoteForm from '../../components/Notes/NoteForm';

export default function EditNote() {
  const history = useHistory();
  const { id } = useParams();
  const { note } = useNote(id);
  const { add } = useNotes();

  if(!note) return null;
  
  const handleSubmit = async (edited) => {
    await add(edited);
    history.replace('/notes');
  };

  return (
    <div>
      <Link to="/notes">
        ← View Notes
      </Link>
      
      <NoteForm
        label="New Note"
        note={note}
        onSubmit={handleSubmit}
      />
    </div>  
  );
}
