import React from 'react';

// Interface defining the structure for individual treat items
// Contains all the necessary information to display a treat on the menu
interface Treat {
    name: string;
    description: string;
    image: string;
    pricePerDozen: number;
    fanFavorite: boolean;
    glutenFree: boolean;
}

// Interface for organizing treats into categories (e.g., "Cookies", "Cakes", "Specialty Items")
// Allows for grouped display of menu items
interface TreatCategory {
    category: string;
    items: Treat[];
}

import React from "react";

const MenuPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-pink-50 text-gray-800">
			<section className="text-center py-20 px-4">
				<h2 className="text-4xl font-extrabold text-pink-700 mb-4">
					Menu Page
				</h2>
			</section>
		</div>
	);
};

export default MenuPage;
