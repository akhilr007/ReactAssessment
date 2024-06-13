const DateCard = () => (
    <div className="w-[76px] h-[66px] bg-[#1A1B1E] bg-opacity-5 mt-[6px]">
        <div className="w-[47px] h-[48px]">
            <h1 className="font-bold leading-[50px] text-[40px] text-left text-[#1A1B1E] ml-[13px]">
                28
            </h1>
        </div>
        <div className="w-[76px] h-[19px] bg-[#CE5151]">
            <h4 className="ml-[9px] mt-[2px] mb-[3px] mr-[14px] text-white text-[12px] leading-[15px] text-left font-medium w-[54px] h-[14px]">
                Oct,2023
            </h4>
        </div>
    </div>
);

const PaymentCard = () => {
    return (
        <div className="w-[352px] h-[183px]">
            <h3 className="w-[76px] h-[19px] text-[16px] leading-[20px] text-left font-bold">
                Video KYC
            </h3>
            <div className="mt-[16px] w-[352px] h-[148px]">
                <div className="flex">
                    <h4 className="w-[76px] h-[14px] font-normal text-[12px] text-left text-[#1A1B1E] text-opacity-60">
                        Scheduled On
                    </h4>
                    <h4 className="ml-[23px] w-[166px] h-[16px] font-bold text-[14px] leading-[17px] text-[#1A1B1E] text-left">
                        Utkarsh SF Bank FD Plan 2
                    </h4>
                </div>
                <DateCard />
            </div>
        </div>
    );
};

export default PaymentCard;
