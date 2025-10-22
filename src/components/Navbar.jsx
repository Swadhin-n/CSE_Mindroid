import React, { useEffect, useState } from 'react';
import NewLogo from '../assets/SVPCET_logo_New.webp';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );
    const location = useLocation();

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
        if (localTheme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [location.pathname]);

    const closeDrawer = () => {
        document.getElementById('my-drawer-3').checked = false;
    };

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar fixed top-0 left-0 right-0 z-50 w-full bg-[#050a30] shadow-lg px-4 md:px-16 py-3 flex items-center justify-between rounded-b-2xl border-b border-blue-900/60">
                    {/* Sidebar toggle for mobile */}
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    {/* Logo and Title */}
                    <div className="mx-2 flex-1 px-2 flex items-center gap-3">
                        <img src={NewLogo} width={'90px'} className='p-1 rounded-full' alt="Clg_logo" />
                        <div>
                          <span className='hidden sm:block text-xl md:text-2xl font-semibold tracking-tight text-blue-100'>St. Vincent Pallotti College Of Engineering & Technology - Department Of Computer Science and Engineering</span>
                          <span className='block sm:hidden text-l md:text-xl font-semibold tracking-tight text-blue-100'>SVPCET - Department Of Computer Science and Engineering</span>
                        </div>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal gap-2">
                            <li>
                                <Link to="/" className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium text-lg">Home</Link>
                            </li>
                            <li>
                                <Link to="/archives" className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium text-lg">Archives</Link>
                            </li>
                            <li>
                                <Link to="/events" className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium text-lg">Events</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium text-lg">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Padding for fixed navbar */}
                <div className="pt-[84px]" />
            </div>
            {/* Sidebar Drawer */}
            <div className="drawer-side h-full z-[100]">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay h-full"></label>
                <ul className="menu menu-lg min-h-full w-80 p-4 bg-base-100/90 backdrop-blur-md rounded-r-2xl shadow-2xl ring-1 ring-primary/10 gap-2 overflow-y-auto">
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={NewLogo} alt="" width="90px" />
                        <div>
                          <h3 className="text-blue-900 font-bold text-zinc-200">St. Vincent Pallotti College of Engineering & Technology - Department Of Computer Science and Engineering</h3>
                        </div>
                    </div>
                    <li>
                        <Link to="/" onClick={closeDrawer} className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/archives" onClick={closeDrawer} className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            Archives
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" onClick={closeDrawer} className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeDrawer} className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
