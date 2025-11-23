import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCommentDots, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How do I track my order?",
    answer: "You can track your order in the 'My Orders' section with real-time delivery updates."
  },
  {
    question: "How do I cancel my order?",
    answer: "Orders can be cancelled within the first 5 minutes from the cart or order page."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, credit/debit cards, net banking, and cash on delivery."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us through live chat, email or phone shown below."
  }
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 pt-28 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-6">

        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-8 flex justify-center items-center gap-3">
          <FaQuestionCircle size={36} /> Help & Support
        </h1>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-red-700">{faq.question}</h3>
                <span className="text-red-600 font-bold text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="text-gray-700 mt-3 animate-fadeIn">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-10 p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-3 text-center">Need More Help?</h2>
          <p className="text-center mb-5 opacity-90">
            We’re here 24/7 to assist you with any questions regarding orders, payments and delivery.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-white text-red-600 px-5 py-3 rounded-xl shadow-md hover:scale-105 font-semibold flex items-center gap-2 transition-all duration-300">
              <FaPhoneAlt /> 9998887770
            </button>

            <button className="bg-white text-red-600 px-5 py-3 rounded-xl shadow-md hover:scale-105 font-semibold flex items-center gap-2 transition-all duration-300">
              <FaEnvelope /> support@foodio.com
            </button>

            <button className="bg-white text-red-600 px-5 py-3 rounded-xl shadow-md hover:scale-105 font-semibold flex items-center gap-2 transition-all duration-300">
              <FaCommentDots /> Live Chat
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Help;
