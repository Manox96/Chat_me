import React, { useState, useRef } from 'react';
import { IoSend } from "react-icons/io5";
import MsjAi from './MsjAi';
import MsjUsr from './MsjUsr';

function Message() {
  const [arr, setArr] = useState([]);
  const [arrai, setArrai] = useState([{ message: 'Hello, How can I help you?'}]);

  const msj = useRef();

  const handleSendMessage = async () => {
    const message = msj.current.value;
    setArr(prevArr => [...prevArr, { message }]);
    setUserMessage(message);
    msj.current.value = '';

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        const data = await response.json();
        setArrai(prevArrai => [...prevArrai, { message: data.response }]);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container relative m-1'>
      <div className='w-4/6 text-center h-5/6 min-h-full  absolute left-52 '>
        <h1 className='font-mono mt-10 text-3xl'>What help u Need</h1>
        <div className='flex flex-col gap-2'>
        {arrai && arrai.map((item, index) => (
            <div className='flex justify-start'>
              <MsjAi msjAi={item.message} />
            </div>
        ))} 
          
          {arr && arr.map((item, index) => (
            <div className='flex justify-end' key={index}>
              <MsjUsr msj={item.message} />
            </div>
          ))}
        </div>
        <div className="mb-6 absolute bottom-2 pl-10 flex flex-row gap-2 items-center">
          <input
            ref={msj}
            type="text"
            placeholder='type what u need ...'
            id="large-input"
            className="block w-[800px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button onClick={handleSendMessage}>
            <IoSend size={"30px"} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Message;
