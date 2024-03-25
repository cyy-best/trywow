import React, { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';

const Books = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        const fecthAllBooks = async()=>{
            try {
                const res = await axios.get("http://localhost:8800/books")
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        fecthAllBooks()
    },[])
  return (
    <div>
      books
    </div>
  )
}

export default Books
