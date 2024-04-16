export default function Header(){
    return(
        <header className='flex justify-between'>
        <a href="" className="flex items-center gap-1">
          MM<span className='font-bold text-xl'>TRAVELS</span>
          </a>
        <div className='flex gap-2 border border-blue-300 rounded-full py-2 px-4 shadow-md shadow-blue-500 '>
          <div>Anywhere</div>
          <div className='border-l border blue-300'></div>
          <div>Any week</div>
          <div className='border-l border blue-300'></div>
          <div>Add Guests</div>
          <button className='bg-primary text-white p-2 rounded-full'>
          <i class="bx bx-search about_icon"></i>
         
          </button>
        </div>
        <Link to={"/login"} className='flex items-centre gap-2 border border-blue-300 rounded-full py-2 px-4'>
  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 relative top-1">
          <path fill-rule="evenodd" 
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                clip-rule="evenodd" />
        </svg>
        <div className=''>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 relative top-1">
          <path fill-rule="evenodd" 
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" 
                clip-rule="evenodd" />
        </svg>
  
        </div>
  
        </Link>
      </header> 
    )
}  