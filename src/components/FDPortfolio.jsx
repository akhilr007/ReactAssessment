import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const FDPortfolio = () => {
    const data = {
        datasets: [
            {
                data: [25000, 20000, 15000, 40000],
                backgroundColor: ["#6C63FF", "#FA9D17", "#B9C606", "#59CBD3"]
            }
        ]
    };

    const options = {
        responsive: true,
        events: [],
        plugins: {
            datalabels: {
                enabled: true,
                formatter: (value, ctx) => {
                    const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / sum) * 100).toFixed(0) + "%";
                    return `${value.toLocaleString()}(${percentage})`;
                },
                color: "#fff",
                font: {
                    weight: "400",
                    size: "8px"
                },
                hover: {
                    mode: null
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    };

    return (
        <div className="w-[398px] h-[286px] ml-[60px] bg-white mt-[77px] shadow-md rounded-md">
            <div className="flex">
                <div className="ml-[25px] pt-[25px] h-[19px] w-[126px]">
                    <h2 className="text-left text-[16px] font-bold leading-[20px]">
                        Your FD Portfolio
                    </h2>
                </div>

                <div className="flex items-center justify-center mt-[25px] ml-[65px] mr-[24px] h-[38px] w-[128px] rounded-[5px] border border-[#CBCBCB]">
                    <h4 className="text-left text-[14px] w-[84px] h-[16px] leading-[17px]">
                        Deposit Amt
                    </h4>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[10px] h-[10px]"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex w-[168px] h-[168px] ml-[22px]">
                <Pie
                    data={data}
                    options={options}
                    plugins={[ChartDataLabels]}
                />
                <div className="ml-[22px] mt-[46px]">
                    <ul className="">
                        <li className="flex items-center">
                            <span className="w-[8px] h-[8px] rounded-full mr-[13px] bg-[#6C63FF]"></span>
                            <p className="w-[80px] h-[16px] text-[14px] leading-[17px] text-left">
                                Bajaj Finserv
                            </p>
                        </li>
                        <li className="flex items-center mt-[11px]">
                            <span className="w-[8px] h-[8px] rounded-full mr-[13px] bg-[#FA9D17]"></span>
                            <p className="w-[102px] h-[16px] text-[14px] leading-[17px] text-left">
                                Shriram Finance
                            </p>
                        </li>
                        <li className="flex items-center mt-[11px]">
                            <span className="w-[8px] h-[8px] rounded-full mr-[13px] bg-[#B9C606]"></span>
                            <p className="w-[111px] h-[16px] text-[14px] leading-[17px] text-left">
                                Mahindra Finance
                            </p>
                        </li>
                        <li className="flex items-center mt-[11px]">
                            <span className="w-[8px] h-[8px] rounded-full mr-[13px] bg-[#59CBD3]"></span>
                            <p className="w-[141px] h-[40px] text-[14px] leading-[17px] text-left">
                                Utkarsh Small Finance Bank
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FDPortfolio;
