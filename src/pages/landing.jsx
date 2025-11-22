import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Bike, Star } from "lucide-react";
import { Utensils, Flame, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white pt-28 pb-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Fastest Food Delivery in <span className="text-yellow-300">Your City</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Fresh meals delivered right at your door with love, speed, and unbeatable taste.
          </p>
          <Link to={'/account'}>
            <button className="px-6 py-3 bg-black text-white rounded-full text-lg flex items-center gap-2 hover:bg-gray-900 transition">
              Order Now <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="burger.avif"
            alt="Foodio Hero"
            className="w-[350px] md:w-[450px]  "
          />

        </motion.div>
      </section>







      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-gray-800"
        >
          Why Choose Foodio?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Fast Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gray-50 shadow hover:shadow-lg transition cursor-pointer"
          >
            <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Super Fast Delivery</h3>
            <p className="text-gray-600">Your order reaches you in record time. Always hot, always fresh.</p>
          </motion.div>

          {/* Fresh Food */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gray-50 shadow hover:shadow-lg transition cursor-pointer"
          >
            <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh & Hot Meals</h3>
            <p className="text-gray-600">Prepared by top chefs with premium ingredients for maximum taste.</p>
          </motion.div>

          {/* Best Quality */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl bg-gray-50 shadow hover:shadow-lg transition cursor-pointer"
          >
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Top Rated Quality</h3>
            <p className="text-gray-600">We deliver the best quality meals loved by thousands of customers.</p>
          </motion.div>
        </div>
      </section>

      {/* ❤️ About / Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#ff4e37] via-[#ff6a3d] to-[#ff914d] text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why People Love Foodio
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="grid md:grid-cols-4 gap-8 text-center"
        >
          {/* Restaurants */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md"
          >
            <Building2 className="mx-auto w-12 h-12 mb-3" />
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-white/90">Restaurants Partnered</p>
          </motion.div>

          {/* Users */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md"
          >
            <Users className="mx-auto w-12 h-12 mb-3" />
            <h3 className="text-3xl font-bold">50K+</h3>
            <p className="text-white/90">Happy Customers</p>
          </motion.div>

          {/* Deliveries */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md"
          >
            <Bike className="mx-auto w-12 h-12 mb-3" />
            <h3 className="text-3xl font-bold">10M+</h3>
            <p className="text-white/90">Orders Delivered</p>
          </motion.div>

          {/* Ratings */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md"
          >
            <Star className="mx-auto w-12 h-12 mb-3" />
            <h3 className="text-3xl font-bold">4.9 / 5</h3>
            <p className="text-white/90">Customer Rating</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= POPULAR DISHES SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-gray-800"
        >
          Popular Dishes
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              img: "https://cdn.pixabay.com/photo/2022/08/31/10/17/burger-7422970_1280.jpg",
              title: "Cheese Burst Burger",
              price: "$8.99",
            },
            {
              img: "https://cdn.pixabay.com/photo/2020/05/12/15/22/pizza-5163575_1280.jpg",
              title: "Italian Veggie Pizza",
              price: "$12.49",
            },
            {
              img: "https://cdn.pixabay.com/photo/2018/03/15/12/16/food-3228057_1280.jpg",
              title: "Crispy Spring Rolls",
              price: "$6.50",
            },
          ].map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="w-[100%] h-40 object-contain mx-auto mb-4"

              />
              <h3 className="text-xl font-semibold mb-2">{dish.title}</h3>
              <p className="text-red-500 font-bold text-lg">{dish.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🍽️ Restaurants Section */}
      <section className=" pb-[90px] px-6 md:px-16 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-gray-800"
        >
          Popular Restaurants
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              img: "/1.jpg",
              title: "Spicyhunt",

            },
            {
              img: "/2.jpg",
              title: "Foodie's Hub",

            },
            {
              img: "/3.jpg",
              title: "The Gourmet Kitchen",

            },
          ].map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="w-[100%] h-40 object-contain mx-auto mb-4"

              />
              <h3 className="text-xl font-semibold mb-2">{dish.title}</h3>

            </motion.div>
          ))}
        </div>
      </section>



      {/* ⭐ Reviews Section */}
      <section className=" bg-[#f8fafc] px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Customers Say
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            {
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              name: "Ariana Patel",
              rating: 5,
              text: "“Foodio delivers hot food faster than any other app I’ve used. Absolutely love the service!”",
            },
            {
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              name: "Michael Roberts",
              rating: 4,
              text: "“Great restaurant selection, smooth delivery, and amazing discounts. Totally worth it!”",
            },
            {
              img: "https://randomuser.me/api/portraits/women/67.jpg",
              name: "Sophia Khan",
              rating: 5,
              text: "“Customer support was extremely helpful and my food arrived fresh and delicious.”",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl text-center"
            >
              <img
                src={review.img}
                alt="User"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-gray-200"
              />

              <h3 className="text-lg font-semibold">{review.name}</h3>

              <p className="text-gray-600 mt-3">“{review.text}”</p>

              <div className="flex justify-center mt-3 text-yellow-400 text-xl">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      <section className="relative py-20 px-6 md:px-16 text-center overflow-hidden">

        {/* 🔥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/coking.mp4" type="video/mp4" />
        </video>

        {/* 🔥 Content Overlay */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Hungry? Order Now & Get Food in Minutes!
          </motion.h2>

          <Link to={'account'}>
           <button className="px-8 py-3 bg-black/70 backdrop-blur-md text-white rounded-full text-lg hover:bg-black transition inline-flex items-center gap-2">
            Order Food <Utensils size={20} />
          </button>
          </Link>
        </div>

        {/* Optional: Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-5"></div>
      </section>

    </div>
  );
};

export default Home;



