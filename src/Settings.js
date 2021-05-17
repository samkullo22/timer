import React from 'react'

export default function Settings() {
  return (
    <div className='modal'>
      <div className='background'></div>
      <div className='foreground'>
        <h1>Wanna set up colors?</h1>
        <div className='colors_container'>
        <div className='bColorDiv'>
          <h1>Background color: </h1>
          <input type='color' id='bColor' onChange={(e) => document.body.style.backgroundColor = e.target.value}/>
        </div>
        <div className='bColorDiv'>
          <h1>Seconds color: </h1>
          <input type='color' onChange={(e) =>{
            let li = document.querySelectorAll('.seconds');
            for(let item of li){
              item.style.color = e.target.value
            }
          } }
        />
        </div>
        </div>
      </div>
      <div className='close' onClick={()=> {
        const modal = document.querySelector('div.modal');
        return modal.style.display = ''
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </div>
    </div>
  )
}
