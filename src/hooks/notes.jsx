import { useContext, useState, useEffect } from 'react';
import { NotesContext } from '../context/NotesContext';
import { useUser } from './user';
import { getNotes, getNote, createNote, updateNote, removeNote } from '../services/notes';

export function useNotes() {
  const context = useContext(NotesContext);

  if(context === undefined) {
      throw new Error('useNotes must be used in a NotesContext');
  }

  const { notes, dispatch } = context;

  useEffect(() => {
      if(notes) return;
      const load = async () => {
          try {
              const payload = await getNotes();
              dispatch({ type: 'reset', payload });
          } catch (error) {
              throw error;
          }
      }
      load();
  }, []);

  const add = async (note) => {
      try {
          const payload = await createNote(note);
          dispatch({ type: 'create', payload });
          return payload;
      }
      catch (error) {
          throw error;
      }
  };
  return { notes, add };
}

export function useNote(id) {
    const context = useContext(NotesContext);
    const { profile } = useUser();
  
    if (context === undefined) {
      throw new Error('useNote must be used within a NotesContext');
    }
  
    const { notes, dispatch } = context;
  
    const [note, setNote] = useState(null);
  
    useEffect(() => {
      const load = async () => {
        try {
          const newNote = await getNote(id);
          setNote(newNote);
        }
        catch (err) {
          toast.error(err.message);
          throw err;
        }
      };
  
      load();
    }, [id]);
  
    const remove = async () => {
      if (!note) return;
  
      try {
        const payload = await removeNote(note.id);
        setNote(null);
        if (notes) dispatch({ type: 'delete', payload });
        toast.success(`Your Note "${note.title}" has been deleted`);
        return payload;
      }
      catch (err) {
        toast.error(err.message);
        throw err;
      }
    };
  
    const update = async (edits) => {
      if (!note) return;
  
      try {
        const updated = await updateNote({
          ...note,
          ...edits
        });
        const payload = {
          ...updated,
          name: profile.name
        };
  
        setNote(payload);
        if (notes) dispatch({ type: 'update', payload });
        toast.success(`Updated Note "${note.title}"`);
        return payload;
      }
      catch (err) {
        toast.error(err.message);
        throw err;
      }
    };
  
    return { note, remove, update };
  }
