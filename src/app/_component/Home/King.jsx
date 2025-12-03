"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function King() {
    const [imgError, setImgError] = useState(false);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* Left column: primary large image */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-50">
                        <Image
                            src="/Coin.avif"
                            alt="Coin preview"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 33vw"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* Middle column: Top collections list */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            TOP COLLECTIONS OVER
                        </h2>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-600">
                            Last 24 Hours
                        </h3>

                        {/* Collections list */}
                        <ul className="mt-4 space-y-3">
                            {[
                                {
                                    src: "/Frame 17.avif",
                                    name: "Penguin Pals",
                                    volume: "8524.03M",
                                    change: "+0.51%",
                                },
                                {
                                    src: "/CoolAPE_logo.avif",
                                    name: "Cool APE",
                                    volume: "10042.82M",
                                    change: "+0.43%",
                                },
                                {
                                    src: "/NoxiousAudience_logo.avif",
                                    name: "Noxious Audience",
                                    volume: "8464.01M",
                                    change: "+0.51%",
                                },
                                {
                                    src: "/PixelsPunk_logo.avif",
                                    name: "Pixels Punk",
                                    volume: "8197.05M",
                                    change: "+0.50%",
                                },
                                {
                                    src: "/CryptoLuckyGirl_logo.avif",
                                    name: "Crypto Lucky Girl",
                                    volume: "8158.22M",
                                    change: "+0.52%",
                                },
                            ].map((c) => (
                                <li
                                    key={c.name}
                                    className="flex items-center justify-between bg-white/60 backdrop-blur-sm p-3 rounded-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                                            <Image
                                                src={c.src}
                                                alt={`${c.name} logo`}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                                loading="lazy"
                                                decoding="async"
                                                sizes="48px"
                                            />
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <span className="font-semibold text-sm sm:text-base text-gray-900">
                                                {c.name}
                                            </span>
                                            <span className="text-sm font-bold text-gray-800">
                                                {c.volume}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="px-3 py-1 rounded-full bg-emerald-100">
                                        <span className="text-sm font-medium text-emerald-600">
                                            {c.change}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right column within middle area: featured items (cards) */}
                    <div className="space-y-24">
                        {/* Card list */}
                        {[
                            { img: "/PunkCat.avif", id: "PunkCat_0036143" },
                            { img: "/PunkCatG.avif", id: "PunkCat_0049096" },
                            { img: "/Coin.avif", id: "PunkCat_0022702" },
                        ].map((item) => (
                            <article
                                key={item.id}
                                className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-3 rounded-2xl shadow-sm"
                                aria-labelledby={item.id}
                            >
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                    <Image
                                        src={item.img}
                                        alt={`${item.id} image`}
                                        width={80}
                                        height={80}
                                        className="object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        sizes="80px"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h4 id={item.id} className="font-bold text-lg">
                                        {item.id}
                                    </h4>
                                    <button
                                        className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium shadow"
                                        aria-label={`Buy ${item.id} for 2.12K USDT`}
                                    >
                                        2.12K USDT
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom row: small avatar + info with graceful image fallback */}
            <div className="mt-8 flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                    {!imgError ? (
                        <Image
                            src="/catLogo.avif"
                            alt="cat logo"
                            width={40}
                            height={40}
                            className="object-cover"
                            loading="lazy"
                            decoding="async"
                            onError={() => {
                                console.warn("catLogo failed to load from /public");
                                setImgError(true);
                            }}
                        />
                    ) : (
                        <div
                            role="img"
                            aria-label="placeholder avatar"
                            className="w-10 h-10 rounded-full bg-gray-200"
                        />
                    )}
                </div>

                <div className="flex items-start gap-6">
                    <div>
                        <h4 className="font-bold text-xl">PunkCat_0022702</h4>
                        <p className="text-sm text-gray-600">Highest Bid</p>
                    </div>

                    <div>
                        <p className="font-semibold">2.12K USDT</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
