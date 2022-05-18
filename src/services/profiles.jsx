import { client, parseData } from './client';

export async function getProfile(userId) {
  const request = await client
    .from('profiles')
    .select()
    .match({ user_id: userId })
    .single();
  return parseData(request);
}

export async function updateProfile({ name, email, bio }) {
  const request = await client
    .from('profiles')
    .update({ name, bio })
    .match({ email })
    .single();
  return parseData(request);
}

export async function createProfile({ name, email, bio }) {
  const request = await client
    .from('profiles')
    .insert({ name, email, bio })
    .single();
  return parseData(request);
}

export async function deleteProfileByEmail(email) {
  const request = await client.from('profiles').delete().match({ email });
  return parseData(request);
}