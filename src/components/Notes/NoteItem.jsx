import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function NoteItem({ note }) {
  const { user } = useAuth();
  const {id, title, name, userId, created } = note;
  const isOwner = user.id === userId;
  const date = new Date(created);
  const action = isOwner ? 'edit' : 'copy';

  return (
    <li>
      <span>{date.toLocaleDateString()}</span>
      
      <Link to={`/notes/${id}`}>
        {title}
      </Link>

      <span>{isOwner ? 'you' : name}</span>

      <span>
        <Link to={`/notes/${id}/${action}`}>
          {action}
        </Link>
      </span>
    </li>
  );
}
