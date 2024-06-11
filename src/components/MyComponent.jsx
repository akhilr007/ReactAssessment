import * as React from "react";

function FDCard({
    src,
    bankName,
    interestRate,
    badgeText1,
    badgeText2,
    description
}) {
    return (
        <div className="flex flex-col p-6 w-full bg-violet-50 rounded-md border-4 border-white border-solid shadow-sm max-md:px-5">
            <div className="flex gap-4 text-base font-semibold text-black">
                <img
                    loading="lazy"
                    src={src}
                    alt={bankName}
                    className="shrink-0 mix-blend-darken aspect-[1.02] w-[49px]"
                />
                <div className="flex-auto my-auto">{bankName}</div>
            </div>
            <div className="flex gap-2.5 mt-3.5 text-sm text-black">
                <div className="flex flex-1 gap-1.5 p-2.5 rounded-md bg-purple-200 bg-opacity-90">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6201f1b015b548518931d6e19d45d69edd64fd488f27fda18a2d3f5377b6763c?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                        alt=""
                        className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">{badgeText1}</div>
                </div>
                <div className="flex flex-1 gap-1.5 py-2.5 rounded-md bg-purple-200 bg-opacity-90">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6201f1b015b548518931d6e19d45d69edd64fd488f27fda18a2d3f5377b6763c?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                        alt=""
                        className="shrink-0 w-4 aspect-square"
                    />
                    <div className="flex-auto my-auto">{badgeText2}</div>
                </div>
            </div>
            <div className="flex gap-5 justify-between mt-5 font-medium">
                <div className="flex flex-col self-start mt-1">
                    <div className="text-base text-zinc-900 text-opacity-60">
                        Interest Upto
                    </div>
                    <div className="mt-2.5 text-sm text-black">
                        {interestRate}
                    </div>
                </div>
                <div className="justify-center px-8 py-4 text-base text-white bg-purple-900 rounded-md max-md:px-5">
                    {description}
                </div>
            </div>
        </div>
    );
}

function FinanceCard({
    src,
    bankName,
    interestRate,
    badgeText1,
    badgeText2,
    details1,
    details2
}) {
    return (
        <div className="flex flex-col px-3.5 pt-2.5 pb-5 max-md:max-w-full">
            <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center max-md:mt-7">
                            <div className="flex flex-col py-6 w-full bg-violet-50 rounded-md border-4 border-white border-solid shadow-sm max-md:px-5">
                                <div className="flex gap-4 text-base font-semibold text-black">
                                    <img
                                        loading="lazy"
                                        src={src}
                                        alt={bankName}
                                        className="shrink-0 mix-blend-darken aspect-[1.02] w-[49px]"
                                    />
                                    <div className="flex-auto my-auto">
                                        {bankName}
                                    </div>
                                </div>
                                <div className="flex gap-2.5 mt-3.5 text-sm text-black">
                                    <div className="flex flex-1 gap-1.5 p-2.5 rounded-md bg-purple-200 bg-opacity-90">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6201f1b015b548518931d6e19d45d69edd64fd488f27fda18a2d3f5377b6763c?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                            alt=""
                                            className="shrink-0 self-start w-4 aspect-square"
                                        />
                                        <div className="flex-auto">
                                            {badgeText1}
                                        </div>
                                    </div>
                                    <div className="flex flex-1 gap-1.5 py-2.5 rounded-md bg-purple-200 bg-opacity-90">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6201f1b015b548518931d6e19d45d69edd64fd488f27fda18a2d3f5377b6763c?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                            alt=""
                                            className="shrink-0 w-4 aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                            {badgeText2}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-5 font-medium">
                                    <div className="flex flex-col self-start mt-1">
                                        <div className="text-base text-zinc-900 text-opacity-60">
                                            Interest Upto
                                        </div>
                                        <div className="mt-2.5 text-sm text-black">
                                            {interestRate}
                                        </div>
                                    </div>
                                    <div className="justify-center px-8 py-4 text-base text-white bg-purple-900 rounded-md max-md:px-5">
                                        Book Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center max-md:mt-7">
                            <div className="flex gap-4 py-5 pr-7 pl-3 bg-blue-50 rounded-md border-4 border-white border-solid shadow-sm max-md:pr-5">
                                <div className="flex flex-col text-sm font-medium text-black">
                                    <div className="flex gap-4 text-base font-semibold">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/15317c27709f805b94ba85843c554da018100477aad95fd654aaca61b82f6b33?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                            alt={bankName}
                                            className="shrink-0 aspect-[0.98] w-[50px]"
                                        />
                                        <div className="my-auto">
                                            {bankName}
                                        </div>
                                    </div>
                                    <div className="flex gap-1.5 px-2.5 py-2.5 mt-3.5 rounded-md bg-sky-600 bg-opacity-10">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2f15dd9fb3c082bb42534d2dc3b863dca936bd94d4f07cf3e0113e31fbd6305?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                            alt=""
                                            className="shrink-0 w-4 aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                            {badgeText1}
                                        </div>
                                    </div>
                                    <div className="mt-6 text-zinc-900 text-opacity-60">
                                        Interest Upto
                                    </div>
                                    <div className="mt-3">{interestRate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-7 py-6 w-full rounded-md border-4 border-white border-solid shadow-sm bg-zinc-100 max-md:px-5">
                    <div className="flex gap-3.5 text-base font-semibold text-black">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/917f80611aa69d5c578075fee754b3a62dc8a48f440b082aaf774470959f930f?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                            alt={bankName}
                            className="shrink-0 aspect-[0.78] w-[34px]"
                        />
                        <div className="flex-auto my-auto">{bankName}</div>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <div className="flex flex-col text-sm font-medium text-black">
                            <div className="flex gap-1.5 px-2 py-2.5 rounded-md bg-zinc-900 bg-opacity-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc1a71bbb5ea58b5282f889f50339c19fcec4c5f4b4c77559c19d5d295d3d0a?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                    alt=""
                                    className="shrink-0 w-4 aspect-square"
                                />
                                <div className="flex-auto my-auto">
                                    {badgeText2}
                                </div>
                            </div>
                            <div className="mt-6 text-zinc-900 text-opacity-60">
                                Interest Upto
                            </div>
                            <div className="mt-3">{interestRate}</div>
                        </div>
                        <div className="flex flex-col self-start mt-2.5">
                            <div className="flex gap-2 text-sm text-black">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc1a71bbb5ea58b5282f889f50339c19fcec4c5f4b4c77559c19d5d295d3d0a?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                    alt=""
                                    className="shrink-0 self-start w-4 aspect-square"
                                />
                                <div className="flex-auto">{details1}</div>
                            </div>
                            <div className="justify-center self-end px-8 py-4 mt-7 text-base font-medium text-white rounded-md bg-zinc-900 max-md:px-5">
                                Book Now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 max-md:gap-0 max-md:flex-col">
                    <div className="flex flex-col grow justify-center max-md:mt-7">
                        <div className="flex flex-col px-5 py-5 w-full bg-rose-50 border-4 border-white border-solid shadow-sm max-md:px-5">
                            <div className="flex gap-4 text-base font-semibold text-black">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9a4d1d001dffade2e300dccaf84dd076db1cf657145eb419dec1f1fd3fee0c?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                    alt={bankName}
                                    className="shrink-0 aspect-[0.98] w-[50px]"
                                />
                                <div className="flex-auto my-auto">
                                    {bankName}
                                </div>
                            </div>
                            <div className="flex gap-2.5 mt-3.5 text-sm text-black">
                                <div className="flex gap-1.5 px-2.5 py-2.5 rounded-md bg-red-600 bg-opacity-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/85d1841013d9596833cca1e25657a6f98a50c81c0985b97ffcf0687b47e32819?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                        alt=""
                                        className="shrink-0 w-4 aspect-square"
                                    />
                                    <div className="flex-auto my-auto">
                                        {badgeText1}
                                    </div>
                                </div>
                                <div className="flex gap-2 px-2 py-2.5 bg-red-600 bg-opacity-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/85d1841013d9596833cca1e25657a6f98a50c81c0985b97ffcf0687b47e32819?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                                        alt=""
                                        className="shrink-0 self-start w-4 aspect-square"
                                    />
                                    <div className="flex-auto">{details2}</div>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between mt-5 font-medium">
                                <div className="flex flex-col self-start mt-1 text-sm">
                                    <div className="text-zinc-900 text-opacity-60">
                                        Interest upto
                                    </div>
                                    <div className="mt-3 text-black">
                                        {interestRate}
                                    </div>
                                </div>
                                <div className="justify-center px-8 py-4 text-base text-white bg-red-600 rounded-md max-md:px-5">
                                    Book Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoCard({ title, content }) {
    return (
        <div className="flex flex-col grow justify-center text-sm text-black max-md:mt-6">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col px-6 py-7 bg-white rounded-md border border-gray-200 border-solid max-md:pl-5">
                    <div className="text-xl font-semibold leading-6">
                        {title}
                    </div>
                    <div className="mt-4 leading-4">{content}</div>
                    <div className="mt-6 text-indigo-700 underline leading-[121%]">
                        Read more...
                    </div>
                </div>
            </div>
        </div>
    );
}

function PendingPayment({ date, depositAmount, tenure, interestRate }) {
    return (
        <div className="flex flex-col justify-center py-px mr-6 ml-6 max-md:mx-2.5">
            <div className="flex flex-col py-1 w-full bg-white">
                <div className="flex gap-5">
                    <div className="flex flex-col text-black">
                        <div className="text-base font-semibold">Video KYC</div>
                        <div className="mt-6 text-xs text-zinc-900 text-opacity-60">
                            Scheduled On
                        </div>
                        <div className="flex flex-col pt-3.5 mt-2 bg-zinc-900 bg-opacity-10">
                            <div className="self-center text-4xl font-semibold">
                                {date}
                            </div>
                            <div className="justify-center py-1.5 mt-1 text-xs font-medium bg-red-500">
                                Oct, 2023
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col grow shrink-0 self-end mt-9 text-sm leading-4 basis-0 w-fit">
                        <div className="font-medium text-black">
                            Utkarsh SF Bank FD Plan 2
                        </div>
                        <div className="flex gap-4 items-start mt-6">
                            <div className="flex flex-col self-stretch">
                                <div className="text-zinc-900 text-opacity-60">
                                    Deposit Amt
                                </div>
                                <div className="mt-3 font-medium text-black">
                                    {depositAmount}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-zinc-900 text-opacity-60">
                                    Tennure
                                </div>
                                <div className="mt-3.5 font-medium text-black">
                                    {tenure}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-zinc-900 text-opacity-60">
                                    Interest Rate
                                </div>
                                <div className="mt-3.5 font-medium text-black">
                                    {interestRate}
                                </div>
                            </div>
                        </div>
                        <div className="flex z-10 gap-3 mt-5 text-base font-semibold">
                            <div className="justify-center self-start px-8 py-3.5 text-white bg-indigo-700 rounded-md shadow-sm max-md:px-5">
                                Complete Now
                            </div>
                            <div className="justify-center px-11 py-4 text-indigo-700 whitespace-nowrap bg-white rounded-md border border-indigo-700 border-solid max-md:px-5">
                                Reschedule
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MyComponent() {
    const FDCardsData = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/53fb27b43e127f8f4e3557b398f32febce64530e53a8108351e5c5300e5354cf?apiKey=a8fbf110677441ca9886f86e1453c0d6&",
            bankName: "Utkarsh Small Finance Bank",
            interestRate: "9.10% p.a",
            badgeText1: "Highest Interest Rate",
            badgeText2: "RBI Insured",
            description: "Book Now"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/15317c27709f805b94ba85843c554da018100477aad95fd654aaca61b82f6b33?apiKey=a8fbf110677441ca9886f86e1453c0d6&",
            bankName: "Bajaj Finserv",
            interestRate: "8.80% p.a",
            badgeText1: "Crisil AAA Rated",
            badgeText2: "No Video KYC Required",
            description: "Book Now"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/917f80611aa69d5c578075fee754b3a62dc8a48f440b082aaf774470959f930f?apiKey=a8fbf110677441ca9886f86e1453c0d6&",
            bankName: "Shriram Finance",
            interestRate: "8.80% p.a",
            badgeText1: "Crisil AAA Rated",
            badgeText2: "No Video KYC Required",
            description: "Book Now"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c9a4d1d001dffade2e300dccaf84dd076db1cf657145eb419dec1f1fd3fee0c?apiKey=a8fbf110677441ca9886f86e1453c0d6&",
            bankName: "Mahindra Finance",
            interestRate: "8.80% p.a",
            badgeText1: "Crisil AAA Rated",
            badgeText2: "No Video KYC Required",
            description: "Book Now"
        }
    ];

    const InfoCardsData = [
        {
            title: "How FDs are taxed",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "How FDs are taxed",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "How FDs are taxed",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ];

    const PendingPaymentData = {
        date: "28",
        depositAmount: "Rs. 20,000",
        tenure: "2 Years",
        interestRate: "9.10%"
    };

    return (
        <div className="flex flex-col px-14 py-6 max-md:px-5">
            <main className="flex flex-col pr-2.5 pb-3 mt-12 max-md:mt-10 max-md:max-w-full">
                <h1 className="self-start ml-3.5 text-2xl font-medium text-zinc-900 max-md:ml-2.5">
                    Welcome, John Paul
                </h1>
                <section className="flex flex-col justify-center self-end mt-7 max-w-full font-medium w-[822px]">
                    <div className="flex flex-col py-6 bg-white rounded-md max-md:max-w-full">
                        <header className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
                            <h2 className="text-base text-black max-md:max-w-full">
                                FD Maturity Timeline
                            </h2>
                            <nav className="flex gap-5 justify-between self-center mt-7 max-w-full text-xs whitespace-nowrap text-zinc-900 text-opacity-60 w-[537px] max-md:flex-wrap">
                                <a>2024</a>
                                <a>2025</a>
                                <a>2026</a>
                            </nav>
                        </header>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6636eb03c63eb9cf200867befdcfd2ca71142506a2ad608947bb43f4fb2a41d3?apiKey=a8fbf110677441ca9886f86e1453c0d6&"
                            alt="FD Maturity Graph"
                            className="self-center mt-4 max-w-full aspect-[4.55] w-[756px]"
                        />
                    </div>
                </section>
                <section className="mt-4 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {FDCardsData.map((data, index) => (
                            <FDCard
                                key={index}
                                src={data.src}
                                bankName={data.bankName}
                                interestRate={data.interestRate}
                                badgeText1={data.badgeText1}
                                badgeText2={data.badgeText2}
                                description={data.description}
                            />
                        ))}
                    </div>
                    {InfoCardsData.map((data, index) => (
                        <InfoCard
                            key={index}
                            title={data.title}
                            content={data.content}
                        />
                    ))}
                    <PendingPayment
                        date={PendingPaymentData.date}
                        depositAmount={PendingPaymentData.depositAmount}
                        tenure={PendingPaymentData.tenure}
                        interestRate={PendingPaymentData.interestRate}
                    />
                </section>
            </main>
        </div>
    );
}

export default MyComponent;
