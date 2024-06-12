const Header = ({ color }) => {
    const data = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    console.log(`bg-[${color}]`);
    return data.map((item, index) => {
        return (
            <div
                key={index}
                style={{
                    backgroundColor: color,
                    opacity: "10%"
                }}
                className="w-[244px] h-[19px] items-center justify-center"
            >
                <span
                    className={`text-[14px] leading-[17px] mx-auto border-r px-[4.5px] border-white py-[4.5px]`}
                >
                    {item}
                </span>
            </div>
        );
    });
};

const TableHeader = () => {
    return (
        <div className="w-[759px] h-[29px] pt-[5.5px] pb-[7.5px] flex ml-[25px] mt-[10px] bg-white border-b border-t border-gray-300">
            <Header color="#6C63FF" />
            <Header color="#74A700" />
            <Header color="#FA9D17" />
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const Column = ({ color }) => {
    const data = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    return data.map((item, index) => {
        return (
            <div
                key={index}
                className="w-[244px] h-[138px]  items-center justify-center border-r border-white px-[4.5px]"
                style={{ backgroundColor: color, opacity: "10%" }}
            ></div>
        );
    });
};

const TableColumn = () => {
    return (
        <div className="w-[759px] h-[140px] bg-white flex ml-[25px] mb-[21px]">
            <Column color="#6C63FF" />
            <Column color="#74A700" />
            <Column color="#FA9D17" />
            {/* 74A700 */}
            <div className="w-[150px] h-[18px] absolute mt-[11.5px]">
                <Graph width="150px" height="18px" tag="Utkarsh FD 1" />
            </div>
            <div className="w-[334px] h-[18px] absolute mt-[41.5px]">
                <Graph width="334px" height="18px" tag="Shriram FD Plan 2" />
            </div>
            <div className="w-[241px] h-[18px] absolute mt-[73.5px] ml-[69.5px]">
                <Graph width="241px" height="18px" tag="Bajaj Finserv FD 1" />
            </div>
            <div className="w-[535px] h-[18px] absolute mt-[105.5px] ml-[92.5px] mb-[20.5px] mr-[108.5px]">
                <Graph width="535px" height="18px" tag="Mahindra FD Plan 2" />
            </div>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const Graph = ({ width, height, tag }) => (
    <div
        className={`absolute w-[${width}] h-[${height}] bg-[#3B39D9]  rounded-[8px]`}
    >
        <h4 className=" text-center text-white text-[12px] leading-[15px] px-[42px] py-[2px]">
            {tag}
        </h4>
    </div>
);

const TimelineContainer = () => {
    return (
        <div className="w-[822px] h-[286px] ml-[26px] mr-[60px] mt-[77px] bg-white rounded-[5px] shadow-[10px]">
            <h3 className="w-auto h-[19px] leading-[20px] font-bold pl-[25px] pt-[16px]">
                FD Maturity Timeline
            </h3>
            <div className="flex justify-around items-center mt-[36px]">
                <h4 className="text-[16px] leading-[20px] text-left font-medium opacity-60 h-[19px]">
                    2024
                </h4>
                <h4 className="text-[16px] leading-[20px] text-left font-medium opacity-60 h-[19px]">
                    2025
                </h4>
                <h4 className="text-[16px] leading-[20px] text-left font-medium opacity-60 h-[19px]">
                    2026
                </h4>
            </div>
            <TableHeader />
            <TableColumn />
        </div>
    );
};

export default TimelineContainer;
