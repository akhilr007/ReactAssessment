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

const PaymentInfoDataCard = ({ name, data }) => (
    <div className="w-auto h-[16px]">
        <h5 className="w-auto text-[14px] text-left leading-[17px] text-[#1A1B1E] text-opacity-60">
            {name}
        </h5>
        <h4 className="text-[14px] leading-[17px] text-left text-[#1A1B1E] font-bold">
            {data}
        </h4>
    </div>
);

const PaymentInfoCard = () => (
    <div className="w-[257px] h-[40px] ml-[23px] mt-[17px]">
        <div className="flex gap-[16px]">
            <PaymentInfoDataCard name="Deposit Amt" data="Rs. 20,000" />
            <PaymentInfoDataCard name="Tenure" data="2 years" />
            <PaymentInfoDataCard name="Interest Rate" data="9.10%" />
        </div>
    </div>
);

const PaymentInfoButtonCard = () => (
    <div className="flex gap-[12px]">
        <div className="w-[170px] h-[42px] rounded-[5px] bg-[#3B39D9] shadow-[#0000000D] mt-[20px]">
            <h4 className="text-white text-[16px] leading-[20px] text-center w-auto h-[19px] pt-[11.5px]">
                Complete Now
            </h4>
        </div>
        <div className="w-[170px] h-[42px] rounded-[5px] bg-white shadow-[#0000000D] mt-[20px] border border-[#3B39D9]">
            <h4 className="text-[#3B39D9] text-[16px] leading-[20px] text-center w-auto h-[19px] pt-[11.5px]">
                Reschedule
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
                <div className="flex">
                    <DateCard />
                    <PaymentInfoCard />
                </div>
                <PaymentInfoButtonCard />
            </div>
        </div>
    );
};

export default PaymentCard;
