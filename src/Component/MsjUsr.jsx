import React from 'react'
import woo from "../assets/aww.svg"

function MsjUsr({msj}) {
  return (
    <div>
        <div>
    <div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src={woo} alt="Jese image" />
   <div class="flex flex-col w-[400px] mr-4 max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Me </span>
      </div>
      <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{msj}</p>
   </div>
    </div>
    </div>
    </div>
  )
}

export default MsjUsr