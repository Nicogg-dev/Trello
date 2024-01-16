import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const BackLog = () => {

    /* const { todos } = useSelector(state => state.todo); */

    const [toDos, setTodos] = useState([
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
    ]);

    const todo = toDos.filter(todo => todo.status === 'todo');
    const doing = toDos.filter(todo => todo.status === 'doing');
    const done = toDos.filter(todo => todo.status === 'done');


    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);

    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, column) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('id');

        const updatedTodos = toDos.map(todo => {
            if (todo.id === parseInt(id, 10)) {
                return { ...todo, status: column };
            }
            return todo;
        });
        setTodos(updatedTodos);

    };


    /* useEffect(() => {
        const piezas = document.querySelectorAll('.caja');
        const contenedores = document.querySelectorAll('#contenedor');

        for (const pieza of piezas) {
            pieza.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('id', pieza.id);
            });
        }

        for (const contenedor of contenedores) {
            contenedor.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            contenedor.addEventListener('drop', (e) => {
                const id = e.dataTransfer.getData('id');
            });
        }

    }, []); */




    return (
        <div className='text-black flex flex-col md:flex-row justify-center text-center gap-10 mt-4'>

            {/* Columna To do */}
            <div
                id='contenedor'
                className='flex flex-col bg-red-200 flex-1 rounded-lg mb-4 h-full'
                onDrop={(e) => handleDrop(e, 'todo')}
                onDragOver={handleDragOver}>

                <h4 className="text-3xl bold my-2  font-bold">
                    To do
                </h4>

                {todo.length > 0 ? (
                    todo.map(todo => (
                        <div
                            key={todo.id}
                            id={todo.id}
                            className="caja bg-white rounded-lg shadow-lg p-4 m-4"
                            draggable
                            onDragStart={(e) => handleDragStart(e, todo.id)}>

                            <h4 className="text-xl">
                                {todo.title}
                            </h4>
                            <p className="text-gray-700">
                                {todo.description}
                            </p>

                        </div>
                    ))
                ) : (
                    <p className="italic">
                        Add elements to the column
                    </p>
                )}
            </div >

            {/* Columna Doing */}
            <div
                id='contenedor'
                className='flex flex-col bg-blue-200 flex-1 rounded-lg mb-4 h-full'
                onDrop={(e) => handleDrop(e, 'doing')}
                onDragOver={handleDragOver}>
                <h4 className="text-3xl my-2 font-bold">
                    Doing
                </h4>

                {doing.length > 0 ? (
                    doing.map(todo => (
                        <div
                            key={todo.id}
                            id={todo.id}
                            className="caja bg-white rounded-lg shadow-lg p-4 m-4"
                            draggable
                            onDragStart={(e) => handleDragStart(e, todo.id)}>

                            <h4 className="text-xl">
                                {todo.title}
                            </h4>
                            <p className="text-gray-700">
                                {todo.description}
                            </p>

                        </div>
                    ))
                ) : (
                    <p className="italic">
                        Add elements to the column
                    </p>
                )}
            </div>


            {/* Columna Done */}
            <div
                id='contenedor'
                className='flex flex-col bg-green-200 flex-1 rounded-lg mb-4 h-full'
                onDrop={(e) => handleDrop(e, 'done')}
                onDragOver={handleDragOver}>
                <h4 className="text-3xl my-3 font-bold">
                    Done
                </h4>

                {done.length > 0 ? (
                    done.map(todo => (
                        <div
                            key={todo.id}
                            id={todo.id}
                            className="caja bg-white rounded-lg shadow-lg p-4 m-4"
                            draggable
                            onDragStart={(e) => handleDragStart(e, todo.id)}>

                            <h4 className="text-xl">
                                {todo.title}
                            </h4>
                            <p className="text-gray-700">
                                {todo.description}
                            </p>

                        </div>
                    ))
                ) : (
                    <p className="italic">
                        Add elements to the column
                    </p>
                )}

            </div>

        </div>
    )
};
