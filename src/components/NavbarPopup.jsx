const NavbarPopup = ({ visible, onClose }) => {
    return (
        <div
            className={`absolute ml-[1068px] mt-[24px] w-[238px] h-[274px] z-30 ${
                visible ? "" : "hidden"
            }`}
            onClick={onClose}
        >
            <div className="w-[238px] h-[226px] mt-[48px] pl-[15px] pt-[27px] bg-white">
                <div className="flex items-baseline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.968"
                        height="20"
                        viewBox="0 0 19.968 20"
                    >
                        <g
                            id="Group_128"
                            data-name="Group 128"
                            transform="translate(-667.979 -1226)"
                        >
                            <circle
                                id="Ellipse_40"
                                data-name="Ellipse 40"
                                cx="5.149"
                                cy="5.149"
                                r="5.149"
                                transform="translate(672.813 1226)"
                                fill="#3b39d9"
                            />
                            <path
                                id="Subtraction_2"
                                data-name="Subtraction 2"
                                d="M9.984,0A10.141,10.141,0,0,0,0,8.368H19.968A10.129,10.129,0,0,0,9.984,0Z"
                                transform="translate(667.979 1237.632)"
                                fill="#fa9d17"
                            />
                        </g>
                    </svg>

                    <h4 className="ml-[12px] w-[89px] h-[24px] leading-[32px] text-[20px] text-left text-[#000000] text-opacity-70">
                        My Profile
                    </h4>
                </div>
                <div className="flex items-baseline mt-[26px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="18.762"
                        viewBox="0 0 20 18.762"
                    >
                        <g
                            id="Group_130"
                            data-name="Group 130"
                            transform="translate(-1564.979 717.784) rotate(-90)"
                        >
                            <path
                                id="Subtraction_3"
                                data-name="Subtraction 3"
                                d="M10,8.381a10.118,10.118,0,0,1-3.555-.64A10.119,10.119,0,0,1,3.438,5.977,10.166,10.166,0,0,1,0,0H20a10.165,10.165,0,0,1-3.438,5.977,10.116,10.116,0,0,1-3.006,1.765A10.118,10.118,0,0,1,10,8.381Z"
                                transform="translate(699.022 1584.979) rotate(-90)"
                                fill="#3b39d9"
                            />
                            <path
                                id="Subtraction_4"
                                data-name="Subtraction 4"
                                d="M10,8.381a10.118,10.118,0,0,1-3.555-.64A10.119,10.119,0,0,1,3.438,5.977,10.166,10.166,0,0,1,0,0H20a10.165,10.165,0,0,1-3.438,5.977,10.116,10.116,0,0,1-3.006,1.765A10.118,10.118,0,0,1,10,8.381Z"
                                transform="translate(709.403 1584.979) rotate(-90)"
                                fill="#a4d92c"
                            />
                        </g>
                    </svg>

                    <h4 className="ml-[12px] w-[89px] h-[24px] leading-[32px] text-[20px] text-left text-[#000000] text-opacity-60">
                        My FDs
                    </h4>
                </div>
                <div className="flex items-baseline mt-[26px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="18.011"
                        viewBox="0 0 22 18.011"
                    >
                        <g
                            id="Group_129"
                            data-name="Group 129"
                            transform="translate(0 -4.741)"
                        >
                            <path
                                id="Rectangle_695"
                                data-name="Rectangle 695"
                                d="M2.957,0h0A2.957,2.957,0,0,1,5.914,2.957V18.011a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.957A2.957,2.957,0,0,1,2.957,0Z"
                                transform="translate(0 4.741)"
                                fill="#fa9d17"
                            />
                            <path
                                id="Rectangle_696"
                                data-name="Rectangle 696"
                                d="M2.957,0h0A2.957,2.957,0,0,1,5.914,2.957V13.808a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.957A2.957,2.957,0,0,1,2.957,0Z"
                                transform="translate(8.042 8.944)"
                                fill="#3b39d9"
                            />
                            <path
                                id="Rectangle_709"
                                data-name="Rectangle 709"
                                d="M2.957,0h0A2.957,2.957,0,0,1,5.914,2.957V8.9a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2.957A2.957,2.957,0,0,1,2.957,0Z"
                                transform="translate(16.086 13.848)"
                                fill="#3b39d9"
                            />
                        </g>
                    </svg>

                    <h4 className="ml-[12px] w-auto h-[24px] leading-[32px] text-[20px] text-left text-[#000000] text-opacity-60">
                        My Transactions
                    </h4>
                </div>
                <div className="flex items-baseline mt-[26px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.904"
                        height="20"
                        viewBox="0 0 18.904 20"
                    >
                        <g
                            id="Group_151"
                            data-name="Group 151"
                            transform="translate(-16.566 -225.629)"
                        >
                            <path
                                id="Subtraction_5"
                                data-name="Subtraction 5"
                                d="M10,8.381a10.118,10.118,0,0,1-3.555-.64A10.119,10.119,0,0,1,3.438,5.977,10.166,10.166,0,0,1,0,0H20a10.165,10.165,0,0,1-3.438,5.977,10.116,10.116,0,0,1-3.006,1.765A10.118,10.118,0,0,1,10,8.381Z"
                                transform="translate(16.566 245.629) rotate(-90)"
                                fill="#3b39d9"
                            />
                            <path
                                id="Rectangle_711"
                                data-name="Rectangle 711"
                                d="M5.457,0h0a5.457,5.457,0,0,1,5.457,5.457V8.9a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5.457A5.457,5.457,0,0,1,5.457,0Z"
                                transform="translate(35.471 229.543) rotate(90)"
                                fill="#fa9d17"
                            />
                        </g>
                    </svg>

                    <h4 className="ml-[12px] w-auto h-[24px] leading-[32px] text-[20px] text-left text-[#000000] text-opacity-60">
                        Logout
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default NavbarPopup;
