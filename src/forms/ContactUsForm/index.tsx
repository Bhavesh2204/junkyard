import React from "react";

const ContactUsForm: React.FC = () => {

  return (
    <form className="space-y-5  dark:bg-gray-700 p-10 rounded-md sm:w-8/12 border-gray-200 border dark:border-none">
      <div>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <input
          type="text"
          id="phone"
          placeholder="Your Phone"
          className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <textarea
          id="message"
          rows={5}
          placeholder="Your Message"
          className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
