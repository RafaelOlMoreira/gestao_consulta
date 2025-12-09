import React from 'react'
import { NavLink } from "react-router";

function Login() {
    return (
        <div className=''>

            <div className="min-h-screen flex items-center justify-center bg-white p-6 md:p-10">
                <div className="w-full max-w-md space-y-10">
                    <div className="text-center md:text-left space-y-3">
                        <h2 className="text-4xl text-black font-semibold">Login:</h2>
                        <p className="text-xl text-[#6C757D]">Informe seu email e senha.</p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <input type="email" placeholder="Informe seu email..." className="text-lg border-2 border-[#d7d7d7] focus:outline-none focus:border-[#3c95d5] w-full py-4 rounded-lg pl-4"
                            />
                        </div>

                        <div className="relative">
                            <input type="checkbox" className="absolute right-4 top-1/2 -translate-y-1/2 scale-125" aria-label="Mostrar senha"
                            />

                            <input type="password" placeholder="Informe sua senha..." className="text-lg border-2 border-[#d7d7d7] focus:outline-none focus:border-[#3c95d5] w-full py-4 rounded-lg pl-4"
                            />
                        </div>

                        <div>
                            <button className="text-2xl text-white bg-[#027be2] hover:bg-[#036cc9] hover:cursor-pointer py-3 w-full rounded-lg">
                                Entrar
                            </button>
                        </div>

                        <div className="text-center">
                            <span>
                                Não tem uma conta?{" "}
                                <NavLink to="/CadastroPaciente" className="hover:text-[#027be2] hover:cursor-pointer transition-all duration-300">
                                    Cadastre-se
                                </NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Login
