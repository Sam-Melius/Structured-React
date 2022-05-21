import { client, parseData } from './client';

function mapFrom({ created_at, user_id, profiles, ...rest}) {
    return {
        created: created_at,
        userId: user_id,
        name: profiles?.name,
        ...rest
    };
}

function mapTo({ created, userId, name, ...rest}) {
    return rest;
}

export async function getNotes() {
    const request = await client
        .from('notes')
        .select(`id, title, created_at, user_id, profiles (name)`);
    const data = parseData(request);
    return data.map(mapFrom);

}

export async function createNote(note) {
    const request = await client
        .from('notes')
        .insert(mapTo(note))
        .single();
    const data = parseData(request);
    return mapFrom(data);
}

export async function updateNote(note) {
    const request = await client
        .from('notes')
        .update(mapTo(note))
        .match({ id: note.id })
        .single();
    const data = parseData(request);
    return mapFrom(data);
}

export async function getNote(id) {
    const request = await client
        .from('notes')
        .select(`
        *,
        profiles (name)`)
        .match({ id })
        .single();
    const data = parseData(request);
    return mapFrom(data);
}

export async function removeNote(id) {
    const request = await client
        .from('notes')
        .delete()
        .match({ id })
        .single();
    const data = parseData(request);
    return mapFrom(data);
}
