
export default function NoteDetail({ note, isOwner }) {
  const { title, description, name, created } = note;
  const date = new Date(created).toLocaleDateString();

  return (
    <article>
      <h2>{title}</h2>
      <p>
        Created by {isOwner ? 'you' : name} on {date} 
      </p>
      <p>{description}</p>
    </article>
  );
}
