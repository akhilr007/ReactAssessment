import PaymentCard from "./PaymentCard";

const PaymentContainer = () => {
    return (
        <div className="w-[398px] h-[725px] bg-white pl-[25px] pt-[25px] pr-[21px] border border-[#E0E1E3]">
            <div className="w-full mb-[26px] border-b border-[#E0E1E3] pb-[26px]">
                <PaymentCard
                    name="Utkarsh SF Bank FD Plan 2"
                    title="Video KYC"
                    date="28"
                    tenure="2 years"
                    primaryButtonLabel="Complete Payment"
                    secondaryButtonLabel="Reschedule"
                />
            </div>
            <div className="w-full mb-[26px] border-b border-[#E0E1E3] pb-[26px]">
                <PaymentCard
                    name="Bajaj Finserv Corp FD 1"
                    title="Pending Payment"
                    date="30"
                    tenure="15 Months"
                    primaryButtonLabel="Pay Now"
                    secondaryButtonLabel="Cancel Application"
                />
            </div>
            <div className="w-full mb-[26px] pb-[26px]">
                <PaymentCard
                    name="Shriram Finance Corp FD 1"
                    title="Upcoming FD Maturity"
                    date="30"
                    tenure="18 Months"
                    primaryButtonLabel="Renew Now"
                    secondaryButtonLabel="Compare Other FDs"
                />
            </div>
        </div>
    );
};

export default PaymentContainer;
