const Navbar = () => {
    return (
        <header className="flex justify-between text-lg font-medium text-black  h-[85px] border border-[#F7F8FA]">
            <img
                loading="lazy"
                src="src/assets/navbar-logo.png"
                alt="Dashboard Logo"
                className="shrink-0 h-[48px] w-[50px] mt-[18px] ml-[60px] "
            />
            <nav className="flex">
                <a className="mt-[36px] mr-[45px] leading-[17px]">Dashboard</a>
                <a className="mt-[36px] mr-[45px] leading-[17px]">FAQs</a>
                <a className="mt-[36px] mr-[58px] leading-[17px]">Support</a>
                <div className="flex justify-center items-center mt-[24px] mr-[60px] mb-[29px] bg-white rounded-3xl border border-indigo-600 border-solid h-[42px] w-[71px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#4A4ED4"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke=""
                        className="my-[13px] ml-[19px] mr[35px] w-[16px] h-[16px]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#4A4ED4"
                        className="w-[10px] h-[10px] my-[18px] mr-[19px] "
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
