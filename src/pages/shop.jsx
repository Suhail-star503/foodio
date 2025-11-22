import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const vegRestaurants = [
    {
        id: 1,
        name: "GreenHub",
        image: "https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg",
        rating: 4.5,
    },
    {
        id: 2,
        name: "Pure Veg Delight",
        image: "https://cdn.pixabay.com/photo/2019/02/21/19/00/restaurant-4011989_1280.jpg",
        rating: 4.2,
    },
    {
        id: 3,
        name: "Veggie Paradise",
        image: "https://cdn.pixabay.com/photo/2020/10/07/12/33/cafe-5635015_1280.jpg",
        rating: 4.5,
    },
    {
        id: 4,
        name: "Salad Bowl",
        image: "https://cdn.pixabay.com/photo/2020/11/18/15/49/cafe-5755763_1280.jpg",
        rating: 4.2,
    },
    {
        id: 5,
        name: "Green Bites",
        image: "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_1280.jpg",
        rating: 4.5,
    },
    {
        id: 6,
        name: "Veggolicious",
        image: "https://cdn.pixabay.com/photo/2017/08/07/07/13/inside-2600919_1280.jpg",
        rating: 4.2,
    },
];

const nonVegRestaurants = [
    {
        id: 7,
        name: "Spice Chicken House",
        image: "https://cdn.pixabay.com/photo/2015/04/06/20/35/table-710040_1280.jpg",
        rating: 4.7,
    },
    {
        id: 8,
        name: "Royal Grill & BBQ",
        image: "https://cdn.pixabay.com/photo/2022/08/20/16/21/restaurant-7399544_960_720.jpg",
        rating: 4.3,
    },
    {
        id: 9,
        name: "Chicken Delight",
        image: "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg",
        rating: 4.7,
    },
    {
        id: 10,
        name: "Chicken Fiesta",
        image: "https://cdn.pixabay.com/photo/2020/11/04/19/46/table-setting-5713429_1280.jpg",
        rating: 4.3,
    },
    {
        id: 11,
        name: "Grill Master",
        image: "https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_1280.jpg",
        rating: 4.7,
    },
    {
        id: 12,
        name: "Kabab Corner",
        image: "https://cdn.pixabay.com/photo/2023/08/31/15/42/grill-8225405_1280.jpg",
        rating: 4.3,
    },
];

const Card = ({ name, image, rating }) => (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-64 hover:scale-105 transition duration-300">
        <img src={image} alt={name} className="h-40 w-full object-cover" />
        <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-yellow-600 font-semibold text-sm mt-1">⭐ {rating}</p>
        </div>
    </div>
);

const Section = ({ title, data }) => (
    <div className="mb-12">
        <h2 className="text-xl font-bold mb-6 text-center lg:text-left ml-[20px] lg:ml-[30px] py-[30px]">{title}</h2>

        {/* 🔥 Grid Layout (Centered Cards) */}
        <div
            className="
                grid
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-10
                place-items-center
            "
        >
            {data.map((item) => (
                <Link to={`/restaurant/${item.id}`} key={item.id}>
                 <Card key={item.id} {...item} />
                </Link>
            ))}
        </div>
    </div>
);

const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="p-6" style={{ paddingTop: "120px",backgroundColor:"whitesmoke" }}>
            <h1 className="text-3xl font-bold text-center mb-12">
                Select Your Favorite Restaurant
            </h1>
            <Section title="Veg Restaurants" data={vegRestaurants} />
            <Section title="Non-Veg Restaurants" data={nonVegRestaurants} />
        </div>
    );
};

export default Shop;


