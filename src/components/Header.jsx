import React, { useState } from 'react'

function Header() {

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className='fixed bg-[#A4C8E1] h-20 w-full content-center shadow-xl'>
            <div className='grid grid-cols-5'>

                <div className='mr-auto pl-3 content-center'>
                    <h1 className='text-xl'>Logo</h1>
                </div>

                <div className='mx-auto content-center col-span-3'>
                    <button onClick={() => setMenuAberto(!menuAberto)} className='lg:hidden'>
                        {menuAberto ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-8'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='size-8'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                            </svg>
                        )}
                    </button>
                    <ul className='hidden lg:flex space-x-3 text-md text-[#3B7A99]'>
                        <li className='hover:text-[#1F4E79] hover:cursor-pointer'>Início</li>
                        <li className='hover:text-[#1F4E79] hover:cursor-pointer'>Consultas</li>
                        <li className='hover:text-[#1F4E79] hover:cursor-pointer'>Médicos</li>
                        <li className='hover:text-[#1F4E79] hover:cursor-pointer'>Pacientes</li>
                        <li className='hover:text-[#1F4E79] hover:cursor-pointer'>Contato</li>
                    </ul>
                </div>

                <div className='ml-auto pr-3 content-center'>
                    <button type="button" className='lg:col-start-3 col-start-2 text-md text-center text-[#A4C8E1] bg-[#1F4E79] hover:bg-[#0D3B66] hover:cursor-pointer px-4 py-1 rounded-md'>
                        Login
                    </button>
                </div>

            </div>

            <div className={`fixed h-screen mt-20 inset-0 -z-1 bg-blue-50 ${menuAberto ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} style={{ transition: "opacity 0.3s ease" }}>
                <ul className="text-2xl text-center text-black">
                    <li className='h-20 p-5 hover:cursor-pointer hover:bg-[#2f2f2f] transition-all duration-200'><a href="#" onClick={() => setMenuAberto(!menuAberto)}>Início</a></li>
                    <li className='h-20 p-5 hover:cursor-pointer hover:bg-[#2f2f2f] transition-all duration-200'><a href="#" onClick={() => setMenuAberto(!menuAberto)}>Consultas</a></li>
                    <li className='h-20 p-5 hover:cursor-pointer hover:bg-[#2f2f2f] transition-all duration-200'><a href="#" onClick={() => setMenuAberto(!menuAberto)}>Médicos</a></li>
                    <li className='h-20 p-5 hover:cursor-pointer hover:bg-[#2f2f2f] transition-all duration-200'><a href="#" onClick={() => setMenuAberto(!menuAberto)}>Pacientes</a></li>
                    <li className='h-20 p-5 hover:cursor-pointer hover:bg-[#2f2f2f] transition-all duration-200'><a href="#" onClick={() => setMenuAberto(!menuAberto)}>Contato</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Header
