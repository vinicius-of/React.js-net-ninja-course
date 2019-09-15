import React from "react";

function Ninjas({list, deleteNinja} /*props*/ ) {

    //const {name, age, belt, id} = this.props
    const ninjaList = list.map(element => {
        // if(element.age > 20){
        //     return (
        //         <div key={element.id}>
        //             <div>Name: { element.name }</div>
        //             <div>Age: { element.age }</div>
        //             <div>Belt: { element.belt }</div>
        //             <div>Id: { element.id }</div>
        //         </div>
        //     )
        // } else {
        //     return null
        // }

         return true ? (
            <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.belt}</td>
                <td><button onClick = { () => {deleteNinja(element.id)} }>Delete</button></td>
            </tr>
         ) : null
    })

    return(
        <div className="ninja-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Belt</th>
                    </tr>
                </thead>
                <tbody>
                    { ninjaList }
                </tbody>
            </table>
        </div>
    )
    
}

export default Ninjas