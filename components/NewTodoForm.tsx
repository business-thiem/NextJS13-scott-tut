import { newTodo } from '@/utils/actions';

const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black/25 " />
        <button type="submit" className="border border-black/25">
          Add new todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
