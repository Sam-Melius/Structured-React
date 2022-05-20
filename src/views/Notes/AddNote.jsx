import { useHistory } from 'react-router-dom';
import { useNotes } from '../../hooks/Notes';
import NoteForm from '../../components/Notes/NoteForm';

export default function AddNote() {
  const { add } = useNotes();
  const history = useHistory();
  
  const handleSubmit = async note => {
    await add(note);
    history.replace('/notes');
  };

  return (
    <div>
      <h1>Add a Note</h1>
      
      <NoteForm
        label="New Note"
        onSubmit={handleSubmit}
      />
    </div>  
  );
}