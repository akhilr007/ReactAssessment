import FDPortfolio from "./FDPortfolio";
import Timeline from "./TimelineContainer";
import Welcome from "./Welcome";

const Body = () => {
    return (
        <div className="w-[1366px] h-[1157px] border border-black bg-[#F7F8FA]">
            <Welcome />
            <div className="flex">
                <FDPortfolio />
                <Timeline />
            </div>
        </div>
    );
};

export default Body;
