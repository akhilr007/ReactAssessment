// eslint-disable-next-line react/prop-types
const CompanyHeader = ({ logo, name }) => (
    <div className="head flex items-center mt-[20px] ml-[22px] mr-[110px]">
        <img
            className="w-[49px] h-[48px] object-cover"
            src={`${logo}`}
            alt="logo"
        />
        <h3 className="text-[16px] leading-[20px] h-[19px] w-[201px] font-bold ml-[16px]">
            {name}
        </h3>
    </div>
);

// eslint-disable-next-line react/prop-types
const CompanyMid = ({ checkLogo, width, boxColor, info }) => (
    <div className="mt-[14px] ml-[25px]">
        <div
            className="flex items-center h-[35px] rounded-[5px] bg-opacity-10"
            style={{ background: boxColor, width: width }}
        >
            <img
                className="w-[16px] h-[16px] ml-[7.5px]"
                src={`${checkLogo}`}
                alt="check-logo"
            />
            <h5 className="text-[14px] mt-[10px] mb-[9px] ml-[6.31px]">
                {info}
            </h5>
        </div>
    </div>
);

const CompanyFoot = ({ percentage, buttonColor }) => (
    <>
        <div className="ml-[25px] mt-[20px] h-[16px]">
            <h5 className="text-[14px] leading-[17px] text-left text-opacity-60 text-[#1A1B1E] font-medium">
                Interest Upto
            </h5>
            <h5 className="text-[14px] mt-[8px] leading-[17px] text-left text-opacity-100 text-[#1A1B1E] font-bold">
                {`${percentage}`}
            </h5>
        </div>
        <div
            className="w-[133px] h-[42px] rounded-[5px] ml-[127px] mt-[20px] mr-[26px]"
            style={{ backgroundColor: buttonColor }}
        >
            <h4 className="text-white text-[16px] leading-[20px] h-[19px] font-medium text-center mx-auto my-[11.5px]">
                Book Now
            </h4>
        </div>
    </>
);

const CompanyCard = ({
    name,
    logo,
    percentage,
    boxColor,
    checkLogo,
    leftInfo,
    rightInfo,
    buttonColor,
    leftWidth,
    rightWidth,
    containerColor
}) => {
    console.log(`bg-[${buttonColor}]`);
    return (
        <div
            style={{ backgroundColor: containerColor }}
            className="w-[398px] h-[202px] rounded-[5px] shadow-[10px] border border-white"
        >
            <CompanyHeader logo={`${logo}`} name={`${name}`} />
            <div className="flex items-center space-x-[10px]">
                <CompanyMid
                    checkLogo={`${checkLogo}`}
                    width={leftWidth}
                    boxColor={boxColor}
                    info={leftInfo}
                />
                <CompanyMid
                    checkLogo={`${checkLogo}`}
                    width={rightWidth}
                    boxColor={boxColor}
                    info={rightInfo}
                />
            </div>
            <div className="flex ">
                <CompanyFoot
                    percentage={percentage}
                    buttonColor={buttonColor}
                />
            </div>
        </div>
    );
};

export default CompanyCard;
