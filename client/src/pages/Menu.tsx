import React from "react";

interface Treat {
  name: string;
  description: string;
  image: string;
  pricePerDozen?: number;
  fanFavorite?: boolean;
  glutenFree?: boolean;
}

interface TreatCategory {
  category: string;
  items: Treat[];
}

const sampleMenu: TreatCategory[] = [
  {
    category: "Cupcakes",
    items: [
      {
        name: "Vanilla Cupcake",
        description: "Classic vanilla cupcake with buttercream frosting.",
        image: "src/assets/images/cupcakes/vanillaCupcake.jpg", //Replace with actual image 
        pricePerDozen: 30,
        fanFavorite: true,
        glutenFree: false,
      },
      {
        name: "Lemon Blueberry",
        description: "Blueberry cupcake with lemon frosting.",
        image: "src/assets/images/cupcakes/lemon-blueberry.jpg", // Replace with actual image 
        pricePerDozen: 30,
        glutenFree: true,
      },
    ],
  },
  {
    category: "Cookies",
    items: [
      {
        name: "Chocolate Chip Cookie",
        description: "Warm, gooey, and packed with chocolate chips.",
        image: "src/assets/images/cookies/chocolate-chip.jpg",
        fanFavorite: true,
      },
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-12">
        Mimi’s Menu
      </h1>

      {sampleMenu.map((category) => (
        <section key={category.category} className="mb-16">
          <h2 className="text-2xl text-pink-600 font-semibold mb-6 text-center">
            {category.category}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-pink-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-pink-700 mb-2">
                  {item.name}
                  {item.fanFavorite && (
                    <span className="ml-2 text-yellow-500">⭐</span>
                  )}
                  {item.glutenFree && (
                    <span className="ml-2 text-green-600">🌿</span>
                  )}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                {item.pricePerDozen && (
                  <p className="text-pink-500 font-medium mt-2">
                    ${item.pricePerDozen.toFixed(2)} per dozen
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Icon Key */}
      <div className="mt-16 text-center text-sm text-gray-600">
        <p>⭐ = Fan Favorite &nbsp;&nbsp; 🌿 = Gluten Free</p>
      </div>
    </main>
  );
};

export default Menu;
