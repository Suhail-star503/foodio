import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import { AppDataContext } from "../AppData/context";
import { useContext } from "react";

const Restaurant = () => {
    const { id } = useParams();
    const { userLocation,setcartitem } = useContext(AppDataContext);
    const [loadingIndex, setLoadingIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        image: "",
        desc: "",
        rating: "",
        category: "",
        address: "",
        menu: []
    });


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let obj = {};

        // -------------------- ID 1 --------------------
        if (id == 1) {
            obj = {
                name: "GreenHub",
                image: "https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg",
                desc: "A haven for vegetarians with organic, plant-based dishes.",
                rating: 4.5,
                category: "Vegetarian",
                address: "123 Green St, Veggie City",
                menu: [
                    { name: "Quinoa Salad", desc: "Fresh veggies + quinoa + lemon dressing.", price: 250, Menuimage: "https://cdn.pixabay.com/photo/2022/05/20/08/56/asian-cuisine-7209004_1280.jpg" },
                    { name: "Veggie Burger", desc: "Black bean patty with avocado.", price: 300, Menuimage: "https://cdn.pixabay.com/photo/2022/04/25/06/16/burger-7155160_1280.jpg" },
                    { name: "Fruit Smoothie", desc: "Seasonal fruits blended.", price: 150, Menuimage: "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg" },
                    { name: "Grilled Tofu Skewers", desc: "Marinated tofu grilled.", price: 280, Menuimage: "https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_1280.jpg" },
                    { name: "Lentil Soup", desc: "Comforting warm lentil soup.", price: 200, Menuimage: 'https://cdn.pixabay.com/photo/2023/05/27/13/49/soup-8021570_1280.jpg' },
                    {
                        name: "Veggie Momos", desc: "Steamed dumplings filled with mixed vegetables.",
                        price: 180,
                        Menuimage: "https://cdn.pixabay.com/photo/2020/09/21/14/07/meal-5590186_1280.jpg"

                    }, {
                        name: "Paneer Tikka", desc: "Spiced paneer cubes grilled to perfection.",
                        price: 320,
                        Menuimage: "https://cdn.pixabay.com/photo/2021/07/02/05/09/paneer-tikka-6380891_1280.jpg"
                    }
                ]
            };
        }

        // -------------------- ID 2 --------------------
        if (id == 2) {
            obj = {
                name: "Pure Veg Delight",
                image: "https://cdn.pixabay.com/photo/2019/02/21/19/00/restaurant-4011989_1280.jpg",
                desc: "Authentic Indian dishes bursting with flavor.",
                rating: 4.7,
                category: "Vegetarian",
                address: "44 Curry Road, Delhi",
                menu: [
                    {
                        name: "Paneer Butter Masala",
                        desc: "Creamy tomato-based gravy with soft paneer cubes.",
                        price: 280,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043097_1280.jpg"
                    },
                    {
                        name: "Dal Tadka",
                        desc: "Yellow dal tempered with ghee, garlic, and spices.",
                        price: 180,
                        Menuimage: "https://cdn.pixabay.com/photo/2020/11/09/13/22/soup-5726677_1280.jpg"

                    },
                    {
                        name: "Aloo Paratha",
                        desc: "Stuffed paratha served hot with curd and pickle.",
                        price: 120,
                        Menuimage: "https://cdn.pixabay.com/photo/2023/10/06/16/11/paratha-8298620_1280.jpg"
                    },
                    {
                        name: "Veg Biryani",
                        desc: "Fragrant basmati rice cooked with vegetables & spices.",
                        price: 250,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/02/12/15/07/biryani-7009130_1280.jpg"
                    },
                    {
                        name: "Palak Paneer",
                        desc: "Spinach puree cooked with paneer in mild spices.",
                        price: 260,
                        Menuimage: "https://cdn.pixabay.com/photo/2017/04/05/22/32/easter-2206609_1280.jpg"
                    },
                    {
                        name: "Mix Veg Curry",
                        desc: "Seasonal vegetables cooked in rich Indian gravy.",
                        price: 220,
                        Menuimage: "https://cdn.pixabay.com/photo/2016/08/09/19/35/soup-1581504_1280.jpg"
                    }

                ]

            };
        }

        // -------------------- ID 3 --------------------
        if (id == 3) {
            obj = {
                name: "Veggie Paradise",
                image: "https://cdn.pixabay.com/photo/2020/10/07/12/33/cafe-5635015_1280.jpg",
                desc: "Fresh veg-food dishes straight from the coast.",
                rating: 4.3,
                category: "Vegetarian",
                address: "Sea View Road, Goa",
                menu: [
                    {
                        name: "Kaju Curry",
                        desc: "Rich cashew-based gravy cooked with spices.",
                        price: 320,
                        Menuimage: "https://cdn.pixabay.com/photo/2021/03/25/10/37/curry-dressing-6122670_1280.jpg"
                    },
                    {
                        name: "Gobi Manchurian",
                        desc: "Crispy cauliflower tossed in Indo-Chinese sauce.",
                        price: 240,
                        Menuimage: "https://cdn.pixabay.com/photo/2017/05/23/13/53/chicken-manchurian-dry-2337313_1280.jpg"
                    },
                    {
                        name: "Matar Paneer",
                        desc: "Green peas and paneer cooked in tomato gravy.",
                        price: 260,
                        Menuimage: "https://cdn.pixabay.com/photo/2024/08/23/07/40/bowl-8991043_1280.jpg"
                    },
                    {
                        name: "Veg Pulao",
                        desc: "Fragrant rice cooked with veggies & mild spices.",
                        price: 180,
                        Menuimage: "https://cdn.pixabay.com/photo/2016/11/22/19/47/cooking-1850338_1280.jpg"
                    },

                ]

            };
        }

        // -------------------- ID 4 --------------------
        if (id == 4) {
            obj = {
                name: "Salad Bowl",
                image: "https://cdn.pixabay.com/photo/2020/11/18/15/49/cafe-5755763_1280.jpg",
                desc: "Best veg-food served with royal spices.",
                rating: 4.8,
                category: "Vegetarian",
                address: "South Town Street, Hyderabad",
                menu: [
                    {
                        name: "Veg Kofta Curry",
                        desc: "Soft vegetable dumplings cooked in creamy gravy.",
                        price: 300,
                        Menuimage: "https://cdn.pixabay.com/photo/2015/10/01/14/29/curry-967086_1280.jpg"
                    },
                    {
                        name: "Aloo Gobi",
                        desc: "Classic potato & cauliflower dry sabzi.",
                        price: 180,
                        Menuimage: "https://www.spicemountain.co.uk/wp-content/uploads/2019/10/aloo_gobi.jpg"
                    },
                    {
                        name: "Methi Malai Matar",
                        desc: "Creamy fenugreek & green peas curry.",
                        price: 260,
                        Menuimage: "https://www.zaykakatadka.com/wp-content/uploads/2018/02/IMG_20180117_121638_HDR.jpg"
                    },
                    {
                        name: "Vegetable Hakka Noodles",
                        desc: "Stir-fried noodles with veggies & sauces.",
                        price: 220,
                        Menuimage: "https://cdn.pixabay.com/photo/2019/05/21/15/21/noodle-4219235_1280.jpg"
                    },

                ]

            };
        }

        // -------------------- ID 5 --------------------
        if (id == 5) {
            obj = {
                name: "Green Bites",
                image: "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_1280.jpg",
                desc: "Delicious food with cheesy goodness.",
                rating: 4.4,
                category: "Fast Food",
                address: "Food Lane, Bangalore",
                menu: [
                    {
                        name: "Paneer Lababdar",
                        desc: "Rich and mildly sweet tomato-based gravy with paneer.",
                        price: 320,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043099_1280.jpg"
                    },
                    {
                        name: "Veg Kadai",
                        desc: "Mixed vegetables cooked in spicy kadai masala.",
                        price: 260,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/08/02/07/30/pizza-7359753_1280.jpg"
                    },
                    {
                        name: "Corn Palak",
                        desc: "Sweet corn simmered in creamy spinach gravy.",
                        price: 240,
                        Menuimage: "https://vanitascorner.com/wp-content/uploads/2018/06/Lasooni-Corn-Palak.jpg"
                    },
                    {
                        name: "Aloo Tikki Chaat",
                        desc: "Crispy potato tikkis topped with curd & chutneys.",
                        price: 150,
                        Menuimage: "https://cdn.pixabay.com/photo/2015/04/20/08/57/food-730828_1280.jpg"
                    }
                ]

            };
        }

        // -------------------- ID 6 --------------------
        if (id == 6) {
            obj = {
                name: "Veggolicious",
                image: "https://cdn.pixabay.com/photo/2017/08/07/07/13/inside-2600919_1280.jpg",
                desc: "Best south delhi's food that melt in your mouth.",
                rating: 4.9,
                category: "veg-food",
                address: "Sugar Street, Mumbai",
                menu: [
                    {
                        name: "Masala Dosa", desc: "Crispy dosa filled with spiced potato masala.", price: 120,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/01/27/07/34/masala-dosa-6971359_1280.jpg"
                    },
                    {
                        name: "Idli Sambar", desc: "Soft steamed idlis served with hot sambar & chutney.", price: 90,
                        Menuimage: "https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg"
                    },
                    {
                        name: "Medu Vada", desc: "Crispy lentil fritters served with coconut chutney.", price: 80,
                        Menuimage: "https://cdn.pixabay.com/photo/2021/06/02/01/38/parippu-vada-6303135_1280.jpg"
                    },
                    {
                        name: "Vegetable Uttapam", desc: "Thick dosa topped with veggies & spices.", price: 110,
                        Menuimage: "https://cdn.pixabay.com/photo/2019/12/20/02/23/india-4707493_1280.jpg"
                    }
                ]

            };
        }

        // -------------------- ID 7 --------------------
        if (id == 7) {
            obj = {
                name: "Spice Chicken House",
                image: "https://cdn.pixabay.com/photo/2015/04/06/20/35/table-710040_1280.jpg",
                desc: "Juicy chicken with premium fillings.",
                rating: 4.6,
                category: "Non-Vegetarian",
                address: "Rajauri garden, Delhi",
                menu: [
                    {
                        name: "Chicken Chettinad", desc: "Spicy Chettinad-style chicken cooked with fresh masala.", price: 220,
                        Menuimage: "https://cdn.pixabay.com/photo/2019/04/07/17/22/chicken-4110212_1280.jpg"

                    },
                    {
                        name: "Mutton Sukka", desc: "Dry-fried tender mutton with roasted spices.", price: 280,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/05/05/14/51/mutton-fry-7176341_960_720.jpg"
                    },
                    {
                        name: "Fish Fry", desc: "Crispy seared fish coated with South Indian masala.", price: 200,
                        Menuimage: "https://cdn.pixabay.com/photo/2017/06/27/09/45/fish-2446879_1280.jpg"
                    },
                    {
                        name: "Chicken Kabab", desc: "Juicy kabab in coconut-based curry.", price: 250,
                        Menuimage: "https://cdn.pixabay.com/photo/2015/11/25/13/51/barbecue-1062083_1280.jpg"
                    }
                ]

            };
        }

        // -------------------- ID 8 --------------------
        if (id == 8) {
            obj = {
                name: "Royal Grill & BBQ",
                image: "https://cdn.pixabay.com/photo/2022/08/20/16/21/restaurant-7399544_960_720.jpg",
                desc: "Authentic Mexican tacos and wraps.",
                rating: 4.2,
                category: "Mexican",
                address: "Fiesta Road, Chennai",
                menu: [
                    {
                        name: "Butter Chicken", desc: "Creamy North Indian chicken curry.", price: 320,
                        Menuimage: "https://www.kitchensanctuary.com/wp-content/uploads/2021/04/Butter-Chicken-Tall-FS-34.jpg"
                    },
                    {
                        name: "Chicken Biryani", desc: "Aromatic rice with flavorful chicken.", price: 280,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/06/14/18/58/chicken-biryani-7262658_1280.jpg"
                    },
                    {
                        name: "Mutton Rogan Josh", desc: "Rich and spicy Kashmiri mutton curry.", price: 350,
                        Menuimage: "https://cdn.pixabay.com/photo/2021/12/27/04/57/lanzhou-6896276_1280.jpg"
                    },
                    {
                        name: "Fish Fry", desc: "Crispy, spiced, shallow-fried fish.", price: 240,
                        Menuimage: "https://cdn.pixabay.com/photo/2018/09/19/12/45/karimeen-3688474_1280.jpg"
                    }
                ]

            };
        }

        // -------------------- ID 9 --------------------
        if (id == 9) {
            obj = {
                name: "Chicken Delight",
                image: "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg",
                desc: "Asian chicken prepared live.",
                rating: 4.1,
                category: "Asian Chicken",
                address: "Dragon Street, Kolkata",
                menu: [
                    {
                        name: "Chicken Lollipop", desc: "Crispy, spicy fried chicken wings.", price: 260,
                        Menuimage: "https://cdn.pixabay.com/photo/2017/02/25/15/19/chicken-lolipops-2097987_1280.jpg"
                    },
                    {
                        name: "Prawn Chilli", desc: "Stir-fried prawns tossed in chilli sauce.", price: 320,
                        Menuimage: "https://cdn.pixabay.com/photo/2014/02/06/08/19/prawns-259776_1280.jpg"
                    },
                    {
                        name: "Chicken Manchurian", desc: "Juicy chicken balls in Manchurian gravy.", price: 280,
                        Menuimage: "https://cdn.pixabay.com/photo/2015/03/12/05/35/spicy-chicken-669639_1280.jpg"
                    },
                    {
                        name: "Egg Fried Rice", desc: "Fried rice tossed with scrambled eggs.", price: 190,
                        Menuimage: "https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_1280.jpg"
                    }
                ]

            };
        }

        // -------------------- ID 10 --------------------
        if (id == 10) {
            obj = {
                name: "Chicken Fiesta",
                image: "https://cdn.pixabay.com/photo/2020/11/04/19/46/table-setting-5713429_1280.jpg",
                desc: "Healthy and fresh chicken for fitness lovers.",
                rating: 4.5,
                category: "Healthy Chicken",
                address: "Fit Avenue, Mumbai",
                menu: [
                    {
                        name: "Grilled Chicken Breast", desc: "Lean, seasoned, perfectly grilled.", price: 320,
                        Menuimage: "https://cdn.pixabay.com/photo/2020/08/15/05/05/barbecue-5489637_1280.jpg"
                    },
                    {
                        name: "Tuna Salad Bowl", desc: "Tuna chunks with fresh greens & dressing.", price: 280,
                        Menuimage: "https://cdn.pixabay.com/photo/2019/01/30/07/34/tuna-poke-3963936_1280.jpg"
                    },
                    {
                        name: "Chicken Wrap", desc: "Whole-wheat wrap filled with grilled chicken.", price: 240,
                        Menuimage: "https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_1280.jpg"
                    },
                    {
                        name: "Egg Protein Bowl", desc: "Boiled eggs with veggies & herbs.", price: 180,
                        Menuimage: "https://cdn.pixabay.com/photo/2014/09/22/14/49/breakfast-456351_1280.jpg"
                    }

                ]

            };
        }

        // -------------------- ID 11 --------------------
        if (id == 11) {
            obj = {
                name: "Grill Master",
                image: "https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_1280.jpg",
                desc: "Serving the best Tibetan-style chicken.",
                rating: 4.4,
                category: "Non-veg Food",
                address: "Chicken Street, Darjeeling",
                menu: [
                    {
                        name: "Pepper Chicken", desc: "Spicy South-style pepper chicken.", price: 300,
                        Menuimage: "https://cdn.pixabay.com/photo/2018/06/01/20/25/chicken-3447081_1280.jpg"
                    },
                    {
                        name: "Garlic Butter Prawns", desc: "Prawns tossed in garlic butter.", price: 360,
                        Menuimage: "https://cdn.pixabay.com/photo/2020/07/06/18/00/squid-5377844_1280.jpg"
                    },
                    {
                        name: "Chicken Shawarma Roll", desc: "Juicy chicken wrapped in pita.", price: 180,
                        Menuimage: "https://cdn.pixabay.com/photo/2015/08/27/05/11/western-909522_1280.jpg"
                    },
                    {
                        name: "Fish Tikka", desc: "Marinated fish grilled to perfection.", price: 320,
                        Menuimage: "https://cdn.pixabay.com/photo/2020/03/18/07/19/dish-4943028_1280.jpg"
                    },

                ]

            };
        }

        // -------------------- ID 12 --------------------
        if (id == 12) {
            obj = {
                name: "Kabab Corner",
                image: "https://cdn.pixabay.com/photo/2023/08/31/15/42/grill-8225405_1280.jpg",
                desc: "Traditional Indian kabab with unlimited servings.",
                rating: 4.9,
                category: "Indian",
                address: "Marg Chowk, Jaipur",
                menu: [
                    {
                        name: "Chicken Seekh Kebabs", desc: "Minced chicken skewers grilled over charcoal.", price: 260,
                        Menuimage: "https://cdn.pixabay.com/photo/2019/05/12/13/43/chicken-4198085_1280.jpg"
                    },
                    {
                        name: "Chicken Malai Tikka", desc: "Creamy, melt-in-mouth chicken kebabs.", price: 300,
                        Menuimage: "https://cdn.pixabay.com/photo/2022/05/17/04/51/mix-grill-7201653_1280.jpg"
                    },
                    {
                        name: "Tandoori Chicken", desc: "Classic smoky chicken marinated in spices.", price: 340,
                        Menuimage: "https://cdn.pixabay.com/photo/2020/08/07/07/03/chicken-5469835_1280.jpg"
                    },
                    {
                        name: "Chicken Reshmi Kebab", desc: "Soft, rich, mildly spiced kebabs.", price: 280,
                        Menuimage: "https://cdn.pixabay.com/photo/2020/09/18/20/41/meat-5582923_1280.jpg"
                    }
                ]

            };
        }

        setData(obj);
    }, [id]);

    const handleBuyNow = (itemname, price, index) => {
        setLoadingIndex(index);
        if (userLocation === null) {

            toast.error("Please set your delevery location to add items to cart.", {
                position: "top-right",
                theme: "dark"
            });
            setLoadingIndex(null);
            return;
        }

        setTimeout(() => {
            // Add to local storage logic here
            const item = { name: itemname, price };
            const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
            cart.push(item);
            localStorage.setItem("cartItems", JSON.stringify(cart));

            toast.success(`${itemname} added to cart!`, {
                position: "top-right",
                theme: "dark"
            });
            setcartitem(cart.length);
            setLoadingIndex(null);
        }, 1000);
    };






    return (
        <div className="max-w-4xl mx-auto p-6" style={{ paddingTop: "90px" }}>

            {/* Back Button */}
            <Link to="/account" className="flex items-center gap-2 text-gray-700 mb-4">
                <ArrowLeft /> Go Back
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg p-6 rounded-xl">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full md:w-72 h-56 object-cover rounded-xl"
                />

                <div>
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                    <p className="text-gray-600 mt-2">{data.desc}</p>

                    <div className="flex gap-4 mt-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg">
                            ⭐ {data.rating}
                        </span>

                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">
                            {data.category}
                        </span>
                    </div>

                    <p className="text-gray-500 mt-4" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                        <FaLocationDot style={{ fontSize: '25px', color: "red" }} /> {data.address}
                    </p>
                </div>
            </div>

            {/* Menu Section */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">Menu</h2>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.menu?.map((food, index) => (
                    <div
                        key={index}
                        className="
                p-5 rounded-2xl shadow-xl 
                bg-gradient-to-br from-red-500 via-red-600 to-red-700 
                text-white border border-red-300/20
                flex items-center gap-5
                hover:shadow-2xl hover:scale-[1.03]
                transition-all duration-300 ease-out
            "
                    >
                        {/* Image */}
                        <div
                            className="
                    min-w-[130px] h-[100px]
                    rounded-xl bg-cover bg-center bg-no-repeat 
                    shadow-md border border-white/20
                "
                            style={{ backgroundImage: `url(${food.Menuimage})` }}
                        ></div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold drop-shadow-sm">
                                {food.name}
                            </h3>

                            <p className="text-red-100 text-sm mt-1 line-clamp-2">
                                {food.desc}
                            </p>

                            <div className="flex items-center justify-between mt-3">
                                <p className="font-bold text-lg">₹{food.price}</p>

                                {/* Buy Now Button */}
                                <button
                                    disabled={loadingIndex === index}
                                    className={`
        bg-white text-red-600 font-semibold 
        px-4 py-2 rounded-lg shadow-md
        transition-all duration-300
        ${loadingIndex === index ? "opacity-50 cursor-not-allowed" : "hover:bg-red-100 hover:shadow-lg"}
    `}
                                    onClick={() => handleBuyNow(food.name, food.price, index)}
                                >
                                    {loadingIndex === index ? "Adding..." : "Add to Cart"}
                                </button>


                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Restaurant;
