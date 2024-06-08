'use client';

import ReasonCard from './ReasonCard';

const Reason = () => {
    return (
        <>
            {/* <!-- ===== reasonCards Table Start ===== --> */}

            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex flex-col gap-24 sm:py-19 py-4">
                <p className="text-center text-3xl text-black font-semibold py-3 dark:text-white ">
                    Why Hire from{' '}
                    <span className="text-[#006BFF]">Talent Connect</span>?
                </p>
                <div className="flex justify-center gap-6 sm:flex-row flex-col">
                    <ReasonCard />
                    <ReasonCard />
                    <ReasonCard />
                </div>
            </div>
        </>
    );
};

export default Reason;
