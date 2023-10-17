import React, { useEffect, useState } from 'react'

function TodoListComponent() {
    // const todos = [{ "title": "item1", "desc": "abc" },
    // { "title": "item2", "desc": "def" },
    // { "title": "item3", "desc": "ghi" }]

    const [todos, setTodos] = useState([])

    useEffect(() => {
        let todos = localStorage.getItem("todos")
        setTodos(JSON.parse(todos));
    }, [])

    const deleteTodo = (title) => {
        let newTodos = todos.filter(item => {
            return item.title != title
        })
        localStorage.setItem("todos", JSON.stringify(newTodos))
        setTodos(newTodos);
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Your Todos</h1>
                    {todos.length == 0 && <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Your Todos will show up here. Please add items by going to the Home Page</p>}
                </div>
                <div class="flex flex-wrap -m-4">

                    {todos.map(item => {
                        return (
                            <div class="p-4 lg:w-1/2">
                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`https://picsum.photos/600/900?a=${item.title}`} />
                                    <div class="flex-grow sm:pl-8">
                                        <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                        <p class="mb-4">{item.desc}</p>
                                        <span class="inline-flex">
                                            <a class="text-gray-500 cursor-pointer" onClick={() => (deleteTodo(item.title))}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
                                                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-gray-500 cursor-pointer" href={`/edit/${item.title}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
                                                    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
};

export default TodoListComponent