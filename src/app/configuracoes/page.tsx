'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LogoDark from '../imgs/logodark.png';
import LogoLight from '../imgs/logolight.png';
import { UserX } from 'lucide-react';
export default function Home() {
    const { theme, resolvedTheme } = useTheme();
    const [editorTheme, setEditorTheme] = useState("vs-light");
    const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined);
    const [activeSection, setActiveSection] = useState<string>("userEdit");

    useEffect(() => {
        setEditorTheme(theme === "dark" ? "vs-dark" : "vs-light");
    }, [theme]);

    useEffect(() => {
        setLogoSrc(resolvedTheme === 'light' ? LogoDark.src : LogoLight.src);
    }, [resolvedTheme]);

    const renderActiveSection = () => {
        switch (activeSection) {
            case "userEdit":
                return (
                    <div className="p-4 col-span-6 md:col-span-4">
                        <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Nome</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-orange-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Sobrenome</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-orange-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Email</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-orange-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-orange-600">Salvar</button>
                        </div>
                    </div>
                );
            case "passwordEdit":
                return (
                    <div className="p-4 col-span-6 md:col-span-4">
                        <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
                        <div className="col-span-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Senha</label>
                                <div className="mt-2">
                                    <input id="senha" name="senha" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-orange-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Confirme a senha</label>
                                <div className="mt-2">
                                    <input id="senha" name="senha" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-orange-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-orange-600">Salvar</button>
                        </div>
                    </div>
                );
            case "configEdit":
                return (
                
                    <div className="max-w-md mx-auto bg-white rounded-md shadow-md dark:bg-black">
                    <h2 className="text-2xl font-semibold mb-6">Excluir Perfil</h2>
                    <form action="#" method="POST">
                        <div className="mb-4">
                        <label  className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Seu Nome</label>
                        <input type="text" id="name" name="name" required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-orange-500 dark:bg-gray-900"/>
                        </div>
                        <div className="mb-4">
                        <label  className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Seu Email</label>
                        <input type="email" id="email" name="email" required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-orange-500 dark:bg-gray-900"/>
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Descrição do problema</label>
                        <textarea id="message" name="message"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-orange-500 dark:bg-gray-900"></textarea>
                        </div>
                        <button type="submit"
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange">
                        Excluir Perfil
                        </button>
                    </form>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='bg-white dark:bg-black'>
            <a href="/menu">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='flex  items-start justify-start m-4'><path d="M19 15V9"/><path d="M15 15h-3v4l-7-7 7-7v4h3v6z"/></svg>
            </button>
            </a>
           
               
        <div className={`flex flex-col items-center justify-start mt-24 min-h-screen bg-white text-black dark:bg-black dark:text-white`}>
           
            <a href="#" style={{ marginRight: '670px' }}>
                <img src={logoSrc} className="w-auto h-28 " />
            </a>
            <div className="lg:col-start-2 col-span-12 lg:col-span-10 grid grid-cols-6 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 mx-auto">
                <div className="p-4 col-span-6 md:col-span-2">
                    <div className="grid grid-cols-5">
                        <div className="md:col-span-5 group relative flex items-left gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo-50 dark:hover:bg-gray-700">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-600 mx-auto md:mx-0">
                                <svg className="mx-auto items-center justify-center h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div className="flex-auto hidden md:block">
                                <a href="#" className="block font-semibold text-gray-900 dark:text-gray-300"onClick={() => setActiveSection("userEdit")}>
                                Informações pessoais
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Altere aqui suas Informações</p>
                            </div>
                        </div>
                        <div className="md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-600 mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="flex-auto hidden md:block">
                                <a href="#" className="block font-semibold text-gray-900 dark:text-gray-300" onClick={() => setActiveSection("passwordEdit")}>
                                    Senha
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Altere sua senha</p>
                            </div>
                            </div>
                        <div className="md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-600 mx-auto md:mx-0">
                               <UserX className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600"/>
                            </div>
                            <div className="flex-auto hidden md:block">
                                <a href="#" className="block font-semibold text-gray-900 dark:text-gray-300" onClick={() => setActiveSection("configEdit")}>
                                Integrações
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Exclua seu perfil</p>
                            </div>
                        </div>
                        </div></div>
                <div className="col-span-6 md:col-span-4">
                    {renderActiveSection()}
                </div>
            </div>
        </div>
        </div>
        
    );
}
