import CompanyCard from "./CompanyCard";
import FDPortfolio from "./FDPortfolio";
import FooterContainer from "./FooterContainer";
import PaymentContainer from "./PaymentContainer";
import Timeline from "./TimelineContainer";
import Welcome from "./Welcome";

const Body = () => {
    return (
        <div className="w-[1366px] h-[1180px] border border-black bg-[#F7F8FA]">
            <Welcome />
            <div className="flex">
                <FDPortfolio />
                <Timeline />
            </div>

            <div className="flex">
                <div className="grid grid-cols-2 gap-[26px] mt-[26px] ml-[60px] w-[822px]">
                    <CompanyCard
                        name="Utkarsh Small Finance Bank"
                        logo="src/assets/utkarsh-logo.png"
                        checkLogo="src/assets/check.png"
                        boxColor="rgba(239, 221, 255, 1)"
                        buttonColor="rgba(82, 11, 141, 1)"
                        leftInfo="Highest Interest Rate"
                        rightInfo="RBI Insured"
                        percentage="9.10%"
                        leftWidth="172px"
                        rightWidth="165px"
                        containerColor="rgba(248, 240, 255, 1)"
                    />
                    <CompanyCard
                        name="Bajaj Finserv"
                        logo="src/assets/bajaj-logo.png"
                        checkLogo="src/assets/bajaj-check.png"
                        boxColor="rgba(0, 114, 187, 0.1)"
                        buttonColor="rgba(0, 114, 187, 1)"
                        leftInfo="Crisil AAA Rated"
                        rightInfo="No Video KYC Required"
                        percentage="9.10%"
                        leftWidth="143px"
                        rightWidth="181px"
                        containerColor="rgba(239, 246, 255, 1)"
                    />
                    <CompanyCard
                        name="Shriram Finance"
                        logo="src/assets/shriram-logo.png"
                        checkLogo="src/assets/shriram-check.png"
                        boxColor="rgba(26, 27, 30, 0.1)"
                        buttonColor="rgba(1, 1, 1, 1)"
                        leftInfo="Crisil AAA Rated"
                        rightInfo="No Video KYC Required"
                        percentage="8.80%"
                        leftWidth="143px"
                        rightWidth="181px"
                        containerColor="rgba(244, 244, 244, 1)"
                    />
                    <CompanyCard
                        name="Mahindra Finance"
                        logo="src/assets/mahindra-logo.png"
                        checkLogo="src/assets/mahindra-check.png"
                        boxColor="rgba(255, 0, 0, 0.1)"
                        buttonColor="rgba(255, 0, 0, 1)"
                        leftInfo="Crisil AAA Rated"
                        rightInfo="No Video KYC Required"
                        percentage="8.80%"
                        leftWidth="143px"
                        rightWidth="181px"
                        containerColor="rgba(255, 239, 239, 1)"
                    />

                    <FooterContainer />
                </div>
                <div className="w-[398px] mt-[26px] ml-[26px]">
                    <PaymentContainer className="h-full" />
                </div>
            </div>
        </div>
    );
};

export default Body;
