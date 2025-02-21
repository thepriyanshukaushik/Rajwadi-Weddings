import React, { useState } from "react";

const venues = [
    { location: "Jaipur", images: ["/images/jaipur1.jpg", "/images/jaipur2.jpg", "/images/jaipur3.jpg", "/images/jaipur4.jpg", "/images/jaipur5.jpg", "/images/jaipur6.jpg"], description: "Whenever we think about **Jaipur** as a wedding destination, a grand picture of royal and elegant wedding captures the mind. This architecturally opulent city is one of the most sought-after destinations for weddings in India. Some famous wedding venues in Jaipur include the **Amber Fort**, **City Palace Jaipur**, and **Jai Mahal Palace**. Being an enchanting city, we hardly find any reason not to choose **Jaipur** for your dream wedding." },
    { location: "Agra", images: ["/images/Agra1.jpg", "/images/Agra2.jpg", "/images/Agra3.jpg"], description: "Known worldwide for the iconic **Taj Mahal**, **Agra** is one of the most romantic and sought-after wedding destinations. The grandeur and beauty of the Taj Mahal make it an ideal backdrop for a fairy-tale wedding. Besides the Taj Mahal, venues like **ITC Mughal**, **The Oberoi Amarvilas**, and **Jaypee Palace** offer exquisite services, ensuring that your wedding in Agra is as magnificent as the city itself." },
    { location: "Manali", images: ["/images/Manali2.jpg", "/images/Manali1.jpg"], description: "An elegant banquet hall in **Manali** offering premium services for all occasions, making it a perfect venue for weddings and grand celebrations. The snow-capped mountains, lush green valleys, and serene atmosphere make **Manali** a popular destination for couples. Some top wedding venues include **Manali Resorts**, **The Himalayan Village**, and **The Johnson's Lodge**." },
    { location: "Mussoorie", images: ["/images/Mussoorie2.jpg", "/images/Mussoorie1.jpg"], description: "An elegant banquet hall in **Mussoorie** offering premium services for all occasions, making it a perfect venue for weddings and grand celebrations. Surrounded by scenic views and an incredible hill station atmosphere, **Mussoorie** offers places like **Kempty Falls** and **The Savoy Hotel** for your wedding celebrations." },
    { location: "Shimla", images: ["/images/Shimla1.jpg", "/images/Shimla2.jpg"], description: "An elegant banquet hall in **Shimla** offering premium services for all occasions, making it a perfect venue for weddings and grand celebrations. The picturesque location amidst the hills is ideal for weddings. Venues like **Wildflower Hall**, **The Oberoi Cecil**, and **Chail Palace** create an unforgettable wedding experience." },
    { location: "Udaipur", images: ["/images/Udaipur1.jpg", "/images/Udaipur2.jpg", "/images/Udaipur3.jpg", "/images/Udaipur4.jpg"], description: "Known for its palatial venues, **Udaipur** is a city of lakes and royal heritage, making it a dream wedding destination. Popular venues like **The City Palace**, **Lake Palace**, and **Jag Mandir** offer exquisite backdrops for your wedding celebration." },
    { location: "Gujrat", images: ["/images/Gujrat2.jpg", "/images/Gujrat1.jpg"], description: "A vibrant and culturally rich location, **Gujrat** offers a mix of tradition and modernity. From traditional wedding venues to luxurious resorts, venues like **Shri Hari Dham**, **The Imperial Palace**, and **Dewan Palace** make for an exceptional choice." },
    { location: "Goa", images: ["/images/Goa1.jpg", "/images/Goa2.jpg", "/images/Goa3.jpg", "/images/Goa4.jpg"], description: "A beach wedding destination like no other, **Goa** offers golden sands and a romantic vibe, perfect for a beachside wedding. Venues like **The Leela Goa**, **Taj Exotica Resort**, and **Alila Diwa Goa** provide the ideal setting for a beach wedding." },
    { location: "Jodhpur", images: ["/images/Jodhpur1.jpg", "/images/Jodhpur2.jpg", "/images/Jodhpur3.jpg", "/images/Jodhpur4.jpg", "/images/Jodhpur5.jpg"], description: "Known as the ‘Blue City’, **Jodhpur** offers majestic venues like **Umaid Bhawan Palace**, **Mehrangarh Fort**, and **The Raas Haveli**. These wedding venues are a blend of heritage and royal luxury, offering a grand atmosphere for your special day." },
    { location: "ITC Grand Bharat", images: ["/images/Itc2.jpg", "/images/Itc1.jpg"], description: "Located near Delhi, the **ITC Grand Bharat** offers a luxurious and opulent setting for weddings. Known for its world-class services and beautiful architecture, this venue offers the perfect blend of royal charm and contemporary elegance for your dream wedding." },
    { location: "Jim Corbett", images: ["/images/Jimcorbett2.jpg", "/images/Jimcorbett1.jpg"], description: "A stunning wedding destination located in the midst of wildlife, **Jim Corbett** offers tranquil and scenic views. Perfect for nature lovers, **Corbett The Baagh** and **Wild Creek Resort** offer a unique and peaceful setting for a memorable wedding celebration." },
    { location: "Have Lock Island", images: ["/images/Havlockisland2.jpg", "/images/Havlockisland1.jpg"], description: "If you're dreaming of a tropical destination wedding, **Havelock Island** offers pristine beaches and a serene environment. It’s perfect for an intimate, relaxed wedding, with venues like **Barefoot at Havelock** and **SeaShell Resort** offering exceptional services." },
];

const Venues = () => {
    const [selectedVenue, setSelectedVenue] = useState(venues[0]);
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedLocation, setSelectedLocation] = useState(venues[0].location);

    const handleSelect = (e) => setSelectedLocation(e.target.value);
    const handleSearch = () => {
        const venue = venues.find((v) => v.location === selectedLocation);
        setSelectedVenue(venue || null);
        setCurrentImage(0);
    };

    const handleNextImage = () => {
        if (selectedVenue) {
            setCurrentImage((prev) => (prev + 1) % selectedVenue.images.length);
        }
    };

    const handlePrevImage = () => {
        if (selectedVenue) {
            setCurrentImage((prev) => (prev - 1 + selectedVenue.images.length) % selectedVenue.images.length);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-10">
            <div className="rounded-lg p-6 w-full max-w-lg bg-white shadow-md">
                <h1 className="w-full text-center uppercase font-[Shancalluna] text-2xl text-[#102C57] font-normal tracking-tight mb-4">Find Your Dream Wedding Venue</h1>
                <select
                    value={selectedLocation}
                    onChange={handleSelect}
                    className="w-full p-3 border border-gray-400 rounded-lg font-[Poppins] focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    <option value="" disabled>Select a Location</option>
                    {venues.map((venue, index) => (
                        <option key={index} value={venue.location}>{venue.location}</option>
                    ))}
                </select>
                <button
                    onClick={handleSearch}
                    className="bg-[#fff] text-[#201658] font-[Poppins] font-normal tracking-[.2em] rounded-[25px] uppercase px-6 border-solid border-[#201658] w-full border-[2px] hover:bg-[#201658] hover:text-white transition ease-out duration-200 py-[12px] my-4 text-[16px]"
                >
                    Search
                </button>
            </div>
            {selectedVenue && (
                <div className="mt-8 shadow-lg rounded-lg p-6 w-full max-w-2xl bg-white">
                    <div className="relative w-full h-72 sm:h-86 overflow-hidden rounded-lg shadow-md">
                        <img
                            src={selectedVenue.images[currentImage]}
                            alt={selectedVenue.location}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                        >
                            ❮
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                        >
                            ❯
                        </button>
                    </div>
                    <h2 className="text-2xl font-medium text-center mt-6 tracking-normal uppercase font-[Shancalluna] text-[#102C57]">{selectedVenue.location}</h2>
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <p className="mt-2 text-[#006989]" dangerouslySetInnerHTML={{
                            __html: selectedVenue.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }}></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Venues;
