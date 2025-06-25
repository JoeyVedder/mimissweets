import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-pink-50 px-6 py-12">
      
      {/* Profile Image */}
      <div className="mb-8 md:mb-0 md:mr-12 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-pink-500 flex items-center justify-center bg-green-100">
          <img
          // src="/src/assets/images/mimi1.PNG"
          // src="/src/assets/images/mimi2.PNG"
          //trying to see whcih one fits better in the god dang circle 
        src="src/assets/images/mimi3.PNG"
        alt="Picture of Hannah, the baker"
        className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Info */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Meet the face behind <em>Mimi's Sweets</em></h1>
        <p className="text-gray-700 mb-5 leading-relaxed">
          Hello! My name is Hannah, also known to my family as Mimi. I got the nickname as a kid because of my middle name, Mae. My love for baking started in 2020 while watching a competitive baking show on Netflix — and I’ve been experimenting with flavors ever since!
        </p>

        {/* Fun Facts */}
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>🧁 Favorite treat to bake: Chocolate Peanut Butter Cupcake</li>
          <li>🍰 My Specialty: Smore's Cookies</li>
          <li>📚 Hobby: I’m a huge reader — one of my favorite books is <em>The Great Alone</em> by Kristin Hannah.</li>
          <li>📍 Based in: Charlotte County, FL</li>
        </ul>
      </div>

    </section>
  );
};

export default AboutPage;
