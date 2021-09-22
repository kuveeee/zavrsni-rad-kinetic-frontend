// import React, { useState } from 'react'
// import Axios from 'axios'

// function PostForm() {
//     const url = "http://localhost:10001"
//     const [data, setData] = useState({
//         firstname: "",
//         lastname:"",
//         gender:"",
//         phonenumber:"",
//         date: "",
//         email:"",
//         iduser: ""
//     })
//     function submit(e) {
//         e.preventDefault();
//         Axios.post(url, {
//             name: data.firstname,
//             date: data.date,
//             iduser: parseInt(data.iduser)
//         })
//             .then(res => {
//                 console.log(res.data)
//             })
//     }
//     function handle(e) {
//         const newdata = { ...data }
//         newdata[e.target.id] = e.target.value
//         setData(newdata)
//         console.log(newdata)
//     }
//     return (
//         <div>
//             <form onChange={(e) => submit(e)}>
//                 <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
//                 <input onChange={(e) => handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
//                 <input onChange={(e) => handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input>
//                 <button type="button">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default PostForm;