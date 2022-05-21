import { Link, useParams, useHistory } from 'react-router-dom';
import { useNote } from '../../hooks/notes';
import { useAuth } from '../../hooks/user';
import NoteForm from '../../components/Notes/NoteForm';

export default function EditNote() {
  const history = useHistory();
  const { id } = useParams();
  const { note, update } = useNote(id);
  const { user } = useAuth();

  if(!note) return null;
  
  const isOwner = user.id === note.userId;
  const detailUrl = `/notes/${id}`;
  
  if(!isOwner) {
    history.replace(detailUrl);
    return null;
  }

  const handleSubmit = async (edited) => {
    await update(edited);
    history.push('/notes');
  };

  return (
    <div>
      <div>
        <Link to="/notes">
          Notes
        </Link>
        {' / '}
        <Link to={detailUrl}>
          {note.title}
        </Link>
      </div>
      
      <NoteForm
        label="Edit Note"
        note={note}
        onSubmit={handleSubmit}
      />
    </div>  
  );
}
