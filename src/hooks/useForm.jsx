import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState({ ...inputs });

  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;

      setFormState((prevState) => {
          return {
              ...prevState,
              [name]: type === 'checkbox' ? checked : value
          };
      });
  };

  return { formState, handleChange};
}
