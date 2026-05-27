import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

const reviews = [
    {
        id: 1,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 2,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 3,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 4,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 5,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 6,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 7,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 8,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 9,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 10,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 11,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
    {
        id: 12,
        name: "Sabo Masties",
        role: "Founder of Rubik",
        text: "suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    },
];

export default function ReviewSlider() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -350,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 350,
            behavior: "smooth",
        });
    };

    return (
        <section className="overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-center sm:justify-between lg:mb-16">
                    <div className="relative inline-block">
                        <h2 className="relative z-10 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            What Our <span className="text-red-500">Customers Say</span>
                        </h2>

                        <svg
                            className="absolute -bottom-2 left-20 z-0 w-48 sm:w-56"
                            viewBox="0 0 270 40"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M5 20C60 45 180 -5 265 20"
                                stroke="#EF4444"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="flex gap-3 sm:gap-4">
                        <button
                            onClick={scrollLeft}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-300 sm:h-12 sm:w-12"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={scrollRight}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 sm:h-12 sm:w-12"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-hidden scroll-smooth scrollbar-hide sm:gap-8"
                >
                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="w-full shrink-0 rounded-3xl border border-slate-200
                             bg-white p-6 shadow-sm transition hover:shadow-lg sm:w-1/2 lg:w-1/3"
                        >
                            <div className="mb-6 flex gap-1 text-amber-400">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        fill="currentColor"
                                        strokeWidth={0}
                                    />
                                ))}
                            </div>

                            <p className="mb-8 leading-relaxed text-slate-600">
                                {item.text}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 shrink-0 rounded-full border-2 
                                border-slate-200 bg-linear-to-br from-red-200 to-orange-200" />

                                <div className="min-w-0">
                                    <h4 className="font-semibold text-slate-900 truncate">
                                        {item.name}
                                    </h4>

                                    <p className="text-sm text-slate-500 truncate">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}