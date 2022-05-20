import { useState } from 'react';
import { useForm } from '../hooks/useForm';


export default function ProfileForm({ name = '', email, bio = '', onSubmit }) {

  const { formState, handleChange } = useForm({ name, email, bio });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          setSaving(true);
          await onSubmit(formState);
      } catch (error) {
          setSaving(false);
      }
  }

  return (
    <form onSubmit={handleSubmit}>
        <section>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                name='name'
                type='text'
                value={formState.name}
                onChange={handleChange} />
        </section>
        <section>
            <label htmlFor='email'>Email</label>
            <p>{email}</p>
            <input
                id='email'
                email='email'
                type='text'
                value={formState.email}
                onChange={handleChange} />
        </section>
        <section>
            <label htmlFor='bio'>Bio</label>
            <p>{bio}</p>
            <input
                id='bio'
                bio='bio'
                type='text'
                value={formState.bio}
                onChange={handleChange} />
        </section>
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
        

    </form>
  )
}
