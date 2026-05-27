import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.jpg";
import offer3 from "../assets/offer3.jpg";

const Offer = () => {

    const offers = [
        {
            id: 1,
            title: "First Order Discount",
            location: "McDonald's East London",
            discount: "-20%",
            image:offer1,
        },
        {
            id: 2,
            title: "Vegan Discount",
            location: "McDonald's East London",
            discount: "-20%",
            image: offer2,
        },
        {
            id: 3,
            title: "Free ice Cream Offer",
            location: "McDonald's East London",
            discount: "-40%",
            image: offer3,
        },
    ];

    return (
        <div className="bg-slate-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">
                    Today's <span className="text-red-500">Hot Offers</span>
                </h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="group relative h-64 rounded-3xl transition sm:h-72 lg:h-80"
                        >
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="h-full w-full object-cover transition rounded-3xl"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent rounded-3xl" />

                            <div className="absolute right-4 top-4 rounded-full bg-slate-900/95 px-3 py-2 text-xs font-bold text-white shadow-lg sm:right-5 sm:top-5 sm:text-sm">
                                {offer.discount}
                            </div>

                            <div className="absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
                                <p className="mb-2 text-xs font-medium text-amber-300 sm:text-sm">
                                    {offer.location}
                                </p>

                                <h3 className="max-w-xs text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                                    {offer.title}
                                </h3>
                            </div>

                            <button className="absolute -bottom-1 -right-1 z-10 flex h-15 w-15 items-center justify-center rounded-3xl bg-white text-2xl font-semibold text-slate-900 shadow-lg transition hover:scale-110 sm:h-14 sm:w-14 sm:text-3xl">
                                +
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Offer;