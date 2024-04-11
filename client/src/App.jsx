import './App.css'

function App() {
  return (
  <div>
    <header className='p-4 flex justify-between'>
      <a href="" className="flex items-center gap-1">
        MM<span className='font-bold text-xl'>TRAVELS</span>
        </a>
      <div className='flex gap-2 border border-blue-300 rounded-full py-2 px-4 shadow-md shadow-blue-500 '>
        <div>Anywhere</div>
        <div className='border-l border blue-300'></div>
        <div>Any week</div>
        <div className='border-l border blue-300'></div>
        <div>Add Guests</div>
        <button className='bg-primary tect-white p-2 rounded-full'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            enable-background="new 0 0 129 129">
          <g>
            <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   
                  c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   
                  c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"></path>
          </g>
        </svg>
        </button>
      </div>
    </header>
  </div>
  )
}

export default App
