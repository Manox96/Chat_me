import React from 'react'
import wo from "../assets/vat.svg"

function MsjAi({msjAi}) {
  return (
    <div className='block'>
    <div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src={wo} alt="Jese image" />
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Ai Chat</span>
      </div>
      <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{msjAi}</p>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
   </div>

    </div>
    </div>
  )
}

export default MsjAi