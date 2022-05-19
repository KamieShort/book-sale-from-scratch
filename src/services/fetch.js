import { client, checkError } from './client';

export async function fetchBooks() {
  const resp = await client.from('books').select('*');
  return checkError(resp);
}

export async function fetchBooksById(id) {
  const resp = await client.from('books').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createBook(book) {
  const resp = await client.from('books').insert(book).single();
  return checkError(resp);
}
