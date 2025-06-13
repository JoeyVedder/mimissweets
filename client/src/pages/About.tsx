import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-pink-50 px-6 py-12">
            <div className="mb-8 md:mb-0 md:mr-12">
                <img
                    src="images/mimi.jpg" // Replace with actual image path
                    alt="The Woman, The Myth, The Legend, MIMIIIIIIIIIII"
                    className="w-64 h-64 object-cover rounded-full shadow-lg border-3 border-pink-500" // tommy im mad at you, tailwind is not fun (yes it is its just so much to type but thats coding for ya)
                    />
            </div>

            {/* About Stuff Secton */}
            <div className="max-w-l text-center md:text-left">
                <h1 className="text-3xl font-bold text-pink-650 mb-4">About Mimi</h1>
                <p className="text-gray-700 mb-5 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-gray-700 m-5 leading-relaxed">
                    lorem impsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* fun fact section which may be botched but ill run it by hannah */}
            <ul className="list-disc list-inside text-left text-gray-700">
                <li>Favorite treat to bake: Chocolate Peanut Butter Cupcake 🧁</li>
                <li>My Speciality: Lorem</li>
                <li>Based in: Punta Gorda, FL📍</li>
            </ul>
        </section>
            
    );
};

export default AboutPage;