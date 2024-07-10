    'use client'
import { ModeToggle } from '../components/toggle'
import { useState,useEffect, useRef } from 'react';
import LogoDark from '../imgs/logodark.png'
import LogoLight from '../imgs/logolight.png'
import { useTheme } from 'next-themes';

export default function Home() {
 
   
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (resolvedTheme === 'light') {
      setLogoSrc(LogoDark.src);
    } else {
      setLogoSrc(LogoLight.src);
    }
  }, [resolvedTheme]);

  const [isModalOpen, setisModalOpen] = useState(false);
  const ToggleModal = () => setisModalOpen(!isModalOpen);
  return (
    <>
    <div className="sm:px-6 w-full dark:bg-black">
        
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="flex items-center justify-between">
                    <a href="#">
                <img src={logoSrc} className="w-auto h-24 " />
            </a>
                        <p tabIndex={0} className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white mr-44">Tarefas</p>
                        <ModeToggle/>
                    </div>
                </div>
                <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 dark:bg-black">
                    <div className="sm:flex items-center justify-between">
                    <div className="flex items-center">
                        <a className="rounded-full focus:outline-none " href="javascript:void(0)">
                            <div className="py-2 px-8 bg-orange-500 text-black rounded-full dark:bg-orange-700 dark:text-white">
                                <p>To Do</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none   ml-4 sm:ml-8 " href="javascript:void(0)">
                            <div className="py-2 px-8 text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full ">
                                <p>Done</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none   ml-4 sm:ml-8 " href="javascript:void(0)">
                            <div className="py-2 px-8 text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-full ">
                                <p>Pending</p>
                            </div>
                        </a>
                    </div>

                        <button  className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-orange-700 hover:bg-orange-600 focus:outline-none rounded" onClick={ToggleModal}>
                            <p className="text-sm font-medium leading-none text-white">Add Tarefa</p>
                        </button>
                    </div>
                    <div className="mt-7 overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                                <tr tabIndex={0} className="focus:outline-none h-16 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 dark:text-white dark:text-white">Marketing Keynote Presentation</p>
                                        </div>
                                    </td>
                                     <td className="pl-24">
                                        <div className="flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path className="stroke-current text-red-500 dark:text-red-500" d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <circle className="stroke-current text-red-500 dark:text-red-500" cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    </svg>


                                            <p className="text-sm leading-none ml-2 text-red-500 dark:text-red-500">Urgente</p>
                                        </div>
                                    </td>
                                   <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2 dark:text-white">04/07</p>
                                        </div>
                                    </td>
                                    
                                    
                                    <td className="pl-5">
                                        <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Prazo para hoje as 18:00</button>
                                    </td>
                                    <td className="pl-4">
                                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </td>
                                    <td>
                                        <div className="relative px-5 pt-2">
                                            <button className="focus:ring-2 rounded-md focus:outline-none" role="button" aria-label="option">
                                                <svg className="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                                <tr tabIndex={0} className="focus:outline-none  h-16  rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td  className="focus:text-indigo-600 ">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 dark:text-white">UX Wireframes</p>
                                        </div>
                                    </td>
                                     <td className="pl-24">
                                        <div className="flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path className="stroke-current text-red-500 dark:text-red-500" d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <circle className="stroke-current text-red-500 dark:text-red-500" cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    </svg>


                                            <p className="text-sm leading-none ml-2 text-red-500 dark:text-red-500">Urgente</p>
                                        </div>
                                    </td>
                                   <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2 dark:text-white">04/07</p>
                                        </div>
                                    </td>
                                    
                                    
                                    <td className="pl-5">
                                        <button className="py-3 px-6 focus:outline-none text-sm leading-none text-gray-700 bg-gray-100 rounded">Prazo para 21/01</button>
                                    </td>
                                    <td className="pl-4">
                                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </td>
                                    <td>
                                        <div className="relative px-5 pt-2">
                                            <button className="focus:ring-2 rounded-md focus:outline-none" role="button" aria-label="option">
                                                <svg className="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                                <tr tabIndex={0} className="focus:outline-none focus:text-indigo-600 h-16  rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 dark:text-white">Marketing Keynote Presentation</p>
                                        </div>
                                    </td>
                                    <td className="pl-24"></td>
                                   <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2 dark:text-white">04/07</p>
                                        </div>
                                    </td>
                                    
                                    
                                    <td className="pl-5">
                                        <button className="py-3 px-7 text-sm leading-none text-gray-700 bg-gray-100 rounded focus:outline-none">Prazo para amanhã</button>
                                    </td>
                                    <td className="pl-4">
                                        <button className="focus:ring-2 focus:ring-offset-2  focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </td>
                                    <td>
                                        <div className="relative px-5 pt-2">
                                            <button className="focus:ring-2 rounded-md focus:outline-none" role="button" aria-label="option">
                                                <svg className="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                                <tr tabIndex={0} className="focus:outline-none h-16 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 dark:text-white">Development Phase 1</p>
                                        </div>
                                    </td>
                                    <td className="pl-24"></td>
                                   <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2 dark:text-white">04/07</p>
                                        </div>
                                    </td>
                                    
                                    
                                    <td className="pl-5">
                                        <button className="py-3 px-7 text-sm leading-none text-gray-700 bg-gray-100 rounded focus:outline-none">Prazo para 28/01</button>
                                    </td>
                                    <td className="pl-4">
                                        <button className="focus:ring-2 focus:ring-offset-2  focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </td>
                                    <td>
                                        <div className="relative px-5 pt-2">
                                            <button className="focus:ring-2 rounded-md focus:outline-none" role="button" aria-label="option">
                                                <svg className="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                                <div tabIndex={0} className="focus:outline-none focus:text-red-300 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div tabIndex={0} className="focus:outline-none focus:text-red-300 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                                <tr tabIndex={0} className="focus:outline-none h-16 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 dark:text-white">Marketing Keynote Presentation</p>
                                        </div>
                                    </td>
                                    <td className="pl-24">
                                        <div className="flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path className="stroke-current text-red-500 dark:text-red-500" d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <circle className="stroke-current text-red-500 dark:text-red-500" cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                    </svg>


                                            <p className="text-sm leading-none ml-2 text-red-500 dark:text-red-500">Urgente</p>
                                        </div>
                                    </td>
                                   <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2 dark:text-white">04/07</p>
                                        </div>
                                    </td>
                                    
                                    
                                    <td className="pl-5">
                                        <button className="py-3 px-7 text-sm leading-none text-gray-700 bg-gray-100 rounded focus:outline-none">Prazo para amanhã</button>
                                    </td>
                                    <td className="pl-4">
                                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </td>
                                    <td>
                                        <div className="relative px-5 pt-2">
                                            <button className="focus:ring-2 rounded-md focus:outline-none" role="button" aria-label="option">
                                                <svg className="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                                <tr tabIndex={0} className="focus:outline-none h-16 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox"  type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 dark:text-white">Marketing Keynote Presentation</p>
                                        </div>
                                    </td>
                                    <td className="pl-24"></td>
                                   <td className="pl-5">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path className="stroke-current text-gray-500 dark:text-white" d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2 dark:text-white">04/07</p>
                                        </div>
                                    </td>
                                    
                                    <td className="pl-5">
                                        <button className="py-3 px-7 text-sm leading-none text-gray-700 bg-gray-100 rounded focus:outline-none">Prazo para 09/01</button>
                                    </td>
                                    <td className="pl-4">
                                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </td>
                                    <td>
                                        <div className="relative px-5 pt-2">
                                            <button className="focus:ring-2 rounded-md focus:outline-none"  role="button" aria-label="option">
                                                <svg className="dropbtn"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                {isModalOpen && (
    <div
        data-dialog-backdrop="sign-in-dialog"
        data-dialog-backdrop-close="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
    >
        <div
            data-dialog="sign-in-dialog"
            className="relative flex flex-col w-full max-w-[24rem] rounded-xl bg-white text-gray-700 shadow-md dark:bg-gray-900"
            style={{ maxHeight: '60%', maxWidth: '35%' }}
        >
            <div  className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-border text-white shadow-lg shadow-orange-500/40">
                <h3 className="text-3xl font-semibold leading-snug tracking-normal">
                    Add Tarefa
                </h3>
            </div>
            <div className="flex flex-col gap-4 p-6">
            <div className="relative">
                <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 dark:text-white"
                    placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 dark:text-white">
                    Nome do Email
                </label>
            </div>

            <div className="relative h-11 w-full min-w-[200px]">
                <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 dark:text-white"
                    placeholder=" "
                    type="date"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 dark:text-white">
                    Data de entrega
                </label>
            </div>


                            <div className="-ml-2.5">
                                <div className="inline-flex items-center">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    data-ripple-dark="true"
                                /></div>
                                <label className="inline-flex items-center mt-3">
                <input type="checkbox" className=" text-orange-500 h-5 w-5 "/><span className="ml-2 text-orange-500">Urgente?</span>
            </label>
                </div>
                
            </div>
            <div className="p-6 pt-0">
            <button type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setisModalOpen(false)}>
                                            Não, cancele
                                        </button>
                <button
                    className="w-8/12 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 py-3 px-6 ml-8 text-center font-bold text-white shadow-md transition-all hover:shadow-lg hover:opacity-90 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
                    type="button"
                    data-ripple-light="true"
                >
                    Add Tarefa
                </button>
            </div>
        </div>
    </div>
)}
    
                    
            </div>

      </>
  
  );
  
}