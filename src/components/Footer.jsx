import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="footer sm:footer-horizontal bg-[#050a30] text-base-content p-8 min-h-32 flex flex-col items-center">
            {location.pathname !== "/contact" && (
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6">
                <nav className="flex flex-col justify-center col-span-1">
                    <h6 className="footer-title text-base font-bold mb-4 text-white">Technical Support</h6>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col bg-gray-800/50 p-4 rounded-lg">
                            <p className="font-semibold text-white text-sm">Swadhin Upadhyay</p>
                            <a href="mailto:swadhin457@gmail.com" className="text-blue-400 hover:underline text-sm">swadhin457@gmail.com</a>
                            <a href="tel:+918788546384" className="text-blue-400 hover:underline text-sm">+91 87885 46384</a>
                        </div>
                        <div className="flex flex-col bg-gray-800/50 p-4 rounded-lg">
                            <p className="font-semibold text-white text-sm">Nikita Bhushanwar</p>
                            <a href="mailto:niktabhushanwar03@gmail.com" className="text-blue-400 hover:underline text-sm">niktabhushanwar03@gmail.com</a>
                            <a href="tel:+919767445679" className="text-blue-400 hover:underline text-sm">+91 97674 45679</a>
                        </div>
                        <div className="flex flex-col bg-gray-800/50 p-4 rounded-lg">
                            <p className="font-semibold text-white text-sm">Ethan Anthony</p>
                            <a href="mailto:e10anthony345@gmail.com" className="text-blue-400 hover:underline text-sm">e10.anthony345@gmail.com</a>
                            <a href="tel:+918888080345" className="text-blue-400 hover:underline text-sm">+91 88880 80345</a>
                        </div>  
                    </div>
                </nav>
                {/* Only show the map if NOT on the contact page */}
                
                    <nav className="flex flex-col justify-center">
                        <h6 className="footer-title text-lg font-bold mb-4 text-white">Maps</h6>
                        <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden border-2 border-blue-600">
                            <iframe
                                title="SVPCET Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29797.59769129945!2d79.047733!3d21.004671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdc6b03bfded%3A0x51964eb66fa3ec5e!2sSt.%20Vincent%20Pallotti%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1755632701761!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </nav>
                
                <nav className="flex flex-col justify-center">
                    <h6 className="footer-title text-lg font-bold mb-4 text-white">Social</h6>
                    <div className="flex gap-6">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/svpcetnagpur?igsh=MTljYWpqM2Y3M21qaw==" className="hover:scale-110 transition-transform">
                            {/* Instagram SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="56"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="fill-current text-white"
                            >
                                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@st.vincentpallotticollegeo4812/shorts" className="hover:scale-110 transition-transform">
                            {/* YouTube SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="56"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="fill-current text-white"
                            >
                                <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a className="hover:scale-110 transition-transform" href="https://www.linkedin.com/school/svpcet/" target="_blank" rel="noopener noreferrer">
                            {/* LinkedIn SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="56"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="fill-current text-white"
                            >
                                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
            )}
            <hr className="w-full border-t border-white mb-3" />
            <div className="w-full flex justify-center items-center">
                <span className="text-white text-sm text-center">
                    © 2025 Department Of Computer Science and Engineering, SVPCET, Nagpur. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;