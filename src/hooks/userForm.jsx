import { useState } from 'react'

export default function userForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);

  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;

      setFormState((prevState) => {
          return {
              ...prevState,
              [name]: type ==='checkbox' ? checked : value
          };
      });
  };

  return { formState, handleChange};
}
