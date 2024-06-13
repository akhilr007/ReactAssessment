import InfoCard from "./InfoCard";

const FooterContainer = () => {
    return (
        <div className="w-[822px] h-[273px] ml-[60px] mt-[26px]">
            <h3 className="w-[496px] h-[32px] text-left text-[24px] font-medium leading-[30px] text-[#1A1B1E]">
                Get Answer
            </h3>
            <h4 className="w-[148px] h-[19px] text-[16px] leading-[20px] text-left font-bold mt-[6px]">
                to all your questions
            </h4>
            <div className="absolute ml-[751px] mt-[-28px]">
                <div className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                        style={{ color: "#000000", opacity: "20%" }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex mt-[22px] gap-[25px] mb-[22px]">
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
        </div>
    );
};

export default FooterContainer;
