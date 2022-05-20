import { client, parseData } from './client';

function mapFrom({ created_at, profiles, ...rest}) {
    return {
        created: created_at,
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
        .select(`id, created_at, note, profiles (name)`);
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
        .mathc({ id: note.id })
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
