import { Link, useParams, useHistory } from 'react-router-dom';
import { useNote } from '../../hooks/notes';
import { useAuth } from '../../hooks/user';
import NoteDetail from '../../components/Notes/NoteDetail';

export default function ViewNote() {
  const history = useHistory();
  const { id } = useParams();
  const { note, remove } = useNote(id);
  const { user } = useAuth();

  if(!note) return null;
  
  const isOwner = user.id === note.userId;

  const handleDelete = async () => {
    if(!confirm('Are you sure?')) return;
    await remove();
    history.replace('/notes');
  };

  return (
    <div>
      <Link to="/notes">
        ← View Notes
      </Link>
      
      <NoteDetail
        note={note}
        isOwner={isOwner}
      />

      <div>
        {isOwner && <Link to={`/notes/${id}/edit`}>
          <p>
            <button>Edit Note</button>
          </p>
        </Link>}

        {isOwner && 
          <p>
            <button onClick={handleDelete}>
              Delete Note
            </button>
          </p>
        }
        
        { isOwner || <Link to={`/notes/${id}/copy`}>
          <p>
            <button>Copy Note</button>
          </p>
        </Link>}
        
      </div>
    </div>  
  );
}
