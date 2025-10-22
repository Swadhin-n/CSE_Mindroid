import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal text-gray-800"> {/* Main container with a light gray background */}
      <div className="container mx-auto p-4 md:p-8"> {/* Centered container with padding */}
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
          <p className="text-lg text-gray-600">We're here to help and answer any question you might have.</p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column for form */}
          <div className="bg-[#050a30] backdrop-blur-sm p-8 rounded-lg shadow-lg border border-blue-300">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="d391b3c6-e436-464f-b61e-ee12a0f74f24"></input>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-blue-500 rounded-md bg-blue-700/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-blue-500 rounded-md bg-blue-700/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-200 mb-1">Mobile</label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  required
                  className="w-full px-4 py-3 border border-blue-500 rounded-md bg-blue-700/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-blue-500 rounded-md bg-blue-700/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
            <span className="block text-center mt-4 text-sm text-gray-300">{result}</span>
          </div>

          {/* Right column for map and address */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#050a30] backdrop-blur-sm p-8 rounded-lg shadow-lg h-full flex flex-col border border-blue-300">
              <h2 className="text-2xl font-bold text-white mb-4">Our Location</h2>
              <div className="flex-grow rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.699716887783!2d79.04515827467907!3d21.00467078063862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdc6b03bfded%3A0x51964eb66fa3ec5e!2sSt.%20Vincent%20Pallotti%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1755892672871!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 text-center text-gray-300">
                <p>St. Vincent Pallotti College of Engineering & Technology,</p>
                <p>Gavsi Manapur, Wardha Road, Nagpur, Maharashtra India - 441108</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Support Section */}
        <div className="mt-12 bg-[#050a30] backdrop-blur-sm p-8 rounded-lg shadow-lg border border-blue-300">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Technical Support</h2>
          <p className="text-center text-gray-300 mb-8">If you encounter any issues or have suggestions, please contact our technical team:</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center">
              <p className="font-semibold text-white">Swadhin Upadhyay</p>
              <p className="text-gray-400"><a href="mailto:swadhin457@gmail.com" className="text-blue-400 hover:underline">swadhin457@gmail.com</a></p>
              <p className="text-gray-400"><a href="tel:+918788546384" className="text-blue-400 hover:underline">+91 87885 46384</a></p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center">
              <p className="font-semibold text-white">Nikita Bhushanwar</p>
              <p className="text-gray-400"><a href="mailto:niktabhushanwar03@gmail.com" className="text-blue-400 hover:underline">niktabhushanwar03@gmail.com</a></p>
              <p className="text-gray-400"><a href="tel:+919767445679" className="text-blue-400 hover:underline">+91 97674 45679</a></p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center">
              <p className="font-semibold text-white">Ethan Anthony</p>
              <p className="text-gray-400"><a href="mailto:e10anthony345@gmail.com" className="text-blue-400 hover:underline">e10.anthony345@gmail.com</a></p>
              <p className="text-gray-400"><a href="tel:+918888080345" className="text-blue-400 hover:underline">+91 88880 80345</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}