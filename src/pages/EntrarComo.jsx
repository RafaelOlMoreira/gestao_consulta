import React from 'react'
import { NavLink } from "react-router";

function EntrarComo() {
    return (
        <div className='h-screen bg-[#F8F9FA]'>

            <div className='md:h-screen md:flex md:items-center md:justify-center'>
                <div className='p-10 space-y-10'>
                    <div className='text-center space-y-3'>
                        <h2 className='text-4xl text-[#6C757D] font-semibold'>Entrar como:</h2>
                        <p className='text-xl text-[#6C757D]'>Selecione o tipo de acesso para continuar</p>
                    </div>
                    <div className='text-center space-y-10 md:grid md:grid-cols-2 md:gap-x-5'>
                        <NavLink to="/LoginMedico">
                            <button className='border-3 border-[#3c95d5] w-full py-4 rounded-lg shadow-xl hover:bg-[#3c95d51c] hover:cursor-pointer'>
                                <div className='flex items-center justify-center space-x-5 group'>
                                    <svg viewBox="0 0 24 24" className='h-8' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.25143C12.8612 2.25311 12.9561 2.25675 13.0446 2.26458C14.8548 2.42465 16.2896 3.85953 16.4497 5.66968C16.4643 5.83512 16.4643 6.02256 16.4643 6.29785L16.4643 7.521C16.4643 11.3903 13.5202 14.5719 9.75001 14.9481V17.0001C9.75001 19.3473 11.6528 21.2501 14 21.2501H14.8824C16.1325 21.2501 17.2247 20.5684 17.8057 19.5558C16.3202 19.0571 15.25 17.6535 15.25 16C15.25 13.9289 16.9289 12.25 19 12.25C21.0711 12.25 22.75 13.9289 22.75 16C22.75 17.9405 21.2761 19.5367 19.3868 19.7303C18.6592 21.5018 16.9174 22.7501 14.8824 22.7501H14C10.8244 22.7501 8.25001 20.1757 8.25001 17.0001V14.9495C4.3217 14.5722 1.25001 11.2625 1.25001 7.23529L1.25 6.29791C1.24997 6.02259 1.24995 5.83514 1.26458 5.66968C1.42465 3.85953 2.85954 2.42465 4.66969 2.26458C4.82536 2.25081 5.00051 2.25002 5.25001 2.24999V2C5.25001 1.58579 5.58579 1.25 6.00001 1.25C6.41422 1.25 6.75001 1.58579 6.75001 2V4C6.75001 4.41421 6.41422 4.75 6.00001 4.75C5.58579 4.75 5.25001 4.41421 5.25001 4V3.75002C4.9866 3.7502 4.88393 3.75148 4.80181 3.75875C3.71573 3.85479 2.85479 4.71572 2.75875 5.80181C2.75074 5.8924 2.75001 6.00802 2.75001 6.3369V7.23529C2.75001 10.6871 5.54823 13.4853 9.00001 13.4853C12.294 13.4853 14.9643 10.815 14.9643 7.521V6.3369C14.9643 6.00802 14.9636 5.8924 14.9555 5.80181C14.8595 4.71572 13.9986 3.85479 12.9125 3.75875C12.8702 3.755 12.8224 3.75285 12.75 3.75162V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM16.75 16C16.75 14.7574 17.7574 13.75 19 13.75C20.2426 13.75 21.25 14.7574 21.25 16C21.25 17.2426 20.2426 18.25 19 18.25C17.7574 18.25 16.75 17.2426 16.75 16Z" fill="#3c95d5"></path> </g></svg>
                                    <span className='text-[24px] text-[#3c95d5]'>Médico</span>
                                </div>
                            </button>
                        </NavLink>
                        <NavLink to="/LoginPaciente">
                            <button className='border-3 border-[#027be2] bg-[#027be2] w-full py-4 rounded-lg shadow-xl hover:bg-[#036cc9] hover:cursor-pointer'>
                                <div className='flex items-center justify-center space-x-5'>
                                    <svg viewBox="0 0 24 24" className='h-8' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 22C3.57038 20.0332 4.74796 18.2971 6.3644 17.0399C7.98083 15.7827 9.95335 15.0687 12 15C16.12 15 19.63 17.91 21 22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    <span className='text-[24px] text-white'>Paciente</span>
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default EntrarComo
