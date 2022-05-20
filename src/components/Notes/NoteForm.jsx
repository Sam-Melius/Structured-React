import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function NoteForm({
  note = {},
  label = 'Note',
  onSubmit,
}) {
  
  const { title = '',  description = '' } = note;
  const { formState, handleChange } = useForm({ title, description });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSaving(true);
      await onSubmit(formState);
    }
    catch(err) {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <legend>{label}</legend>
        <section>
          <label htmlFor="name">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formState.title}
            onChange={handleChange}
          />
        </section>

        <section>
          <label htmlFor="name">Note</label>
          <textarea
            id="note"
            name="description"
            type="text"
            value={formState.description}
            onChange={handleChange}
            rows={10}
          />
        </section>
       
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </fieldset>
    </form>
  );
}
