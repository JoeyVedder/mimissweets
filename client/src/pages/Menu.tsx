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
