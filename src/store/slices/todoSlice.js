import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                id: 1,
                title: 'Todo 1',
                description: 'This is a description for todo 1',
                status: 'todo'
            },
            {
                id: 2,
                title: 'Todo 2',
                description: 'This is a description for todo 2',
                status: 'doing'
            },
            {
                id: 3,
                title: 'Todo 3',
                description: 'This is a description for todo 3',
                status: 'todo'
            },
            {
                id: 4,
                title: 'Todo 4',
                description: 'This is a description for todo 4',
                status: 'todo'
            },
            {
                id: 5,
                title: 'Todo 5',
                description: 'This is a description for todo 5',
                status: 'todo'
            },
        ],
    },
    reducers: {
        add: (state, /* action */) => {
            state.counter += 1;
        },
        remove: (state, /* action */) => {
            state.counter -= 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { add, remove } = todoSlice.actions;