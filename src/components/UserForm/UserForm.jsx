import React from 'react'
import { useForm } from '../../hooks/useForm';

export default function UserForm() {
  const { formState, handleChange } = userForm({
        email: '',
        password: '',
      });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <section>
        <label htmlFor="email">Email</label>
        <input
            id="email"
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
          />
        </section>
        <section>
        <label htmlFor="password">Password</label>
        <input
            id="password"
            type="password"
            name="password"
            required
            value={formState.password}
            onChange={handleChange}
          />
        </section>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : label}
        </button>
        
    </form>
  )
}
