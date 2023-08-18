'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  });

  //soft refresh of page when new data has been submitted, to fetch & render new data
  revalidatePath('/todos');
};
