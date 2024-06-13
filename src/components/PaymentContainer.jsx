import PaymentCard from "./PaymentCard";

const PaymentContainer = () => {
    return (
        <div className="w-[398px] h-[725px] bg-white pl-[25px] pt-[25px] pr-[21px]">
            <div className="border-b border-[#E0E1E3] mb-[26px]">
                <PaymentCard />
            </div>
            <div className="mb-[26px]">
                <PaymentCard />
            </div>
            <div className="mb-[26px]">
                <PaymentCard />
            </div>
        </div>
    );
};

export default PaymentContainer;
