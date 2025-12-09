import React from 'react'
import { NavLink } from "react-router";

function Registrar() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6 md:p-10">
            <div className="w-full max-w-md space-y-10">
                <div className="text-center md:text-left space-y-3">
                    <h2 className="text-4xl text-black font-semibold">Cadastro:</h2>
                    <p className="text-xl text-[#6C757D]">Informe seus dados cadastrais.</p>
                </div>

                <div className="space-y-5">
                    <input type="text" placeholder="Informe seu Nome Completo..." className="text-lg border-2 border-[#d7d7d7] focus:outline-none focus:border-[#3c95d5] w-full py-4 rounded-lg pl-4" />
                    <input type="number" placeholder="Informe seu CPF..." className="text-lg border-2 border-[#d7d7d7] focus:outline-none focus:border-[#3c95d5] w-full py-4 rounded-lg pl-4" />
                    <input type="email" placeholder="Informe seu Email..." className="text-lg border-2 border-[#d7d7d7] focus:outline-none focus:border-[#3c95d5] w-full py-4 rounded-lg pl-4" />
                    <input type="password" placeholder="Informe sua senha..." className="text-lg border-2 border-[#d7d7d7] focus:outline-none focus:border-[#3c95d5] w-full py-4 rounded-lg pl-4" />

                    <div className="relative">
                        <input type="checkbox" className="absolute right-4 top-1/2 -translate-y-1/2 scale-125"
                        />

                        <input type="password" placeholder="Confirme sua senha..." className="text-lg border-2 border-[#d7d7d7] focus:outline-none focus:border-[#3c95d5] w-full py-4 rounded-lg pl-4"
                        />
                    </div>

                    <button className="text-2xl text-white bg-[#027be2] hover:bg-[#036cc9] hover:cursor-pointer py-3 w-full rounded-lg">
                        Cadastrar
                    </button>

                    <div className="text-center">
                        <span>
                            Já tem uma conta?{" "}
                            <NavLink to="/LoginPaciente" className="hover:text-[#027be2] hover:cursor-pointer transition-all duration-300">
                                Entrar
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrar
