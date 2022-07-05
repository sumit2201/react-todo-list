export interface InputFormType {
    handleChange: (value: string) => void;
    handleSubmit: (value: string) => void;
}

export interface TodoItemType {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoListType {
    todos: TodoItemType[];
    onMarkAsDone: (id: number, done: boolean) => void;
    onDelete: (id: number) => void
}