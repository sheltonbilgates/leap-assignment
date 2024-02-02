import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Table = () => {
    const [data, setData] = useState([])


    useEffect( ()=>{
        let apiEndpoint = 'http://localhost:8080/api/task/get/task'
        axios.get(apiEndpoint).then((response) => {
            setData(response.data)
        })
    },[])


    // console.log(data);
  return (
    <div>
        <div className='w-full'>
            <div className=''>
                <table>
                    <thead>
                        <tr className='text-[#F1FAEE]'>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((rows, idx) => (
                                <tr>
                                    <td>{idx+1}</td>
                                    <td>{rows.title}</td>
                                    <td>{rows.description}</td>
                                    <td>{rows.duedate}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Table