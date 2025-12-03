"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16 min-h-[60vh] px-6 sm:px-10 lg:px-16 gap-8 bg-gradient-to-br from-green-200 via-lime-100 via-emerald-200 to-pink-200"
            aria-label="Hero section"
        >
            {/* Left Heading */}
            <div className="flex-1 text-center lg:text-left">
                <p className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug text-gray-900">
                    Explore, Discover and <br className="hidden sm:block" />
                    Earn Big with one of the top Web3 NFT Marketplaces in the world
                </p>
            </div>

            {/* Middle Section - Multi-Reward */}
            <div className="flex-1 max-w-md text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start p-2 sm:p-4 gap-3">
                    <Image
                        src="https://image.treasurenft.xyz/icon/icon_cardTick_01.png"
                        alt="Multi-Reward icon"
                        width={50}
                        height={50}
                        loading="lazy"
                        decoding="async"
                    />
                    <h4 className="font-bold text-lg sm:text-xl">Multi-Reward</h4>
                </div>
                <p className="font-medium text-sm sm:text-base text-gray-800 leading-relaxed">
                    Treasure Fun leverages a proprietary AI-powered algorithmic trading
                    model and provides a dual earnings mechanism with trading rewards as
                    well as referral rewards.
                </p>
            </div>

            {/* Right Section - Earn Future Value */}
            <div className="flex-1 max-w-md text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start p-2 sm:p-4 gap-3">
                    <Image
                        src="https://image.treasurenft.xyz/icon/icon_histogram_01.png"
                        alt="Earn Future Value icon"
                        width={50}
                        height={50}
                        loading="lazy"
                        decoding="async"
                    />
                    <h4 className="font-bold text-lg sm:text-xl">Earn Future Value</h4>
                </div>
                <p className="font-medium text-sm sm:text-base text-gray-800 leading-relaxed">
                    Treasure Fun reduces the entry hurdles of the NFT market and expands
                    the boundaries of NFT collection & trading through its innovative AI
                    algorithmic trading process and rewarding financial model.
                </p>
            </div>
        </section>
    );
}
