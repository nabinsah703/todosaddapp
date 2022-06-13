import React from 'react';
import TodoItems from './TodoItems';

const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className=" my-3 ">Todo List</h3>
            {props.todos.length === 0 ? "No todos list" : props.todos.map((todo) => {

                return (<><TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
                </>
                )
            })

            }
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Go to the market</td>
                        <td>Go and buy some fruits.</td>
                    </tr>
                    <tr>

                        <td>2</td>
                        <td>Go to the market</td>
                        <td>Go and buy some Vegetables.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Todos;