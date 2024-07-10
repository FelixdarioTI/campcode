'use client'

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import LogoDark from './imgs/logodark.png'
import LogoLight from './imgs/logolight.png'
import { useTheme } from 'next-themes';
import GIF from './imgs/Animation - 1720535551803.gif'
type User = {
    email: string;
    password: string;
  };
  
export default function Home() {
    const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      const passwordInputs = document.querySelectorAll('input[type="password"]');
      passwordInputs.forEach(input => {
        input.setAttribute('autocomplete', 'new-password');
        input.addEventListener('focus', () => {
          input.removeAttribute('type');
          input.setAttribute('type', 'password');
        });
      });
    });
  },[])
  useEffect(() => {
    const registeredEmail = localStorage.getItem('registeredEmail');
    if (registeredEmail) {
      setEmail(registeredEmail);
      localStorage.removeItem('registeredEmail');
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allowedCredentials: User[] = JSON.parse(localStorage.getItem('allowedCredentials') || '[]');

    const found = allowedCredentials.some(
      cred => cred.email === email && cred.password === password
    );

    if (found) {
      router.push('/menu');
    } else {
      setError("Falha no login: Credenciais inválidas");
    }
  };
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (resolvedTheme === 'light') {
      setLogoSrc(LogoDark.src);
    } else {
      setLogoSrc(LogoLight.src);
    }
  }, [resolvedTheme]);
  return (
<div className="relative flex h-full w-full">
  <div className="h-screen w-1/2 bg-white dark:bg-black">
    <div className="mx-auto flex h-full w-2/3 flex-col justify-start text-white xl:w-1/2 ">
    <img
      src={logoSrc}
      className="w-auto h-52 mb-12 mt-16"
    />
      <div>
        <p className="text-2xl text-black dark:text-white">Login</p>
        <p className="text-black dark:text-white">Faça login para continuar</p>
      </div>
      <div>
        <fieldset className="border-t border-solid border-gray-900 dark:border-gray-600 ">
          <legend className="mx-auto px-2 text-center text-sm text-black dark:text-white">Ou faça login através do nosso sistema seguro</legend>
        </fieldset>
      </div>
      <div className="mt-10">
      <form className="mx-auto mb-0 mt-0 max-w-md space-y-4" onSubmit={handleSubmit}>
              <div>
                {error && (
                  <div className="relative">
                    <div className="rounded-lg border border-red-400 bg-red-100 text-red-700 px-4 py-3" role="alert">
                      <span className="block sm:inline">{error}</span>
                    </div>
                  </div>
                )}
                <div className="relative">
                  <label className="text-orange-500 font-semibold text-sm m-2">Email</label>
                  <input
                    name="email"
                    placeholder="exemplo@exemplo.com"
                    className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent dark:text-white dark:bg-gray-800 w-full"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative">
              <label className="text-orange-500 font-semibold text-sm m-2">Senha</label>
                <input
                  name="password"
                  placeholder="Senha"
                  className="rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent dark:text-white dark:bg-gray-800 w-full"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <button
                    type="button"
                    className="text-gray-500 mt-6 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </span>

              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <span className="ml-2 text-sm text-black dark:text-white"><a href="">Não tem conta?</a></span>
                </label>
                <button className="inline-block rounded-lg bg-orange-500 ml-4 px-24 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50" type="submit">Login</button>
              </div>
            </form>
      </div>
    </div>
  </div>
  <div className="h-screen w-1/2 bg-orange-600">
  <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" className="h-full w-full" />
  </div>
</div>
  );
  
  
}

