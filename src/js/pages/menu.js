const treats = [
    {
        category: "Cupcakes",
        items: [
            {
                name: "Vanilla Cupcake",
                description: "Nothing beats a classic homemade Vanilla Cupcake with buttercream frosting!!",
                image: "",
                fanFavorites: false,  
                glutenFree: false
            },
            {
                name: "Chocolate Cupcake",
                description: "Another classic!",
                image: "",
                fanFavorites: false, 
                glutenFree: false
            },
            {
                name: "Chocolate Espresso Cupcake",
                description: "Chocolate cupcake topped with frosted buttercream.",
                image: "/src/assets/images/treats/espresso.jpg",
                fanFavorites: true,  
                glutenFree: false
            },
            {
                name: "Lemon Blueberry",
                description: "Vanilla cupcake with blueberries inside and topped with blueberry and buttercream frosting.",
                image: "",
                fanFavorites: false,  
                glutenFree: true
            },
            {
                name: "Chocolate Peanut Butter",
                description: "Chocolate cupcake with peanut butter frosting.",
                image: "/src/assets/images/treats/PB.jpg",
                fanFavorites: true,  
                glutenFree: true
            },
            {
                name: "Apple Pie",
                description: "Cinnamon cupcake with cinnamon apple filling topped with cinnamon buttercream frosting.",
                image: "/src/assets/images/treats/apple.pie.jpg",
                fanFavorites: false,  
                glutenFree: false
            },
            {
                name: "Salted Caramel",
                description: "Vanilla Cupcake with caramel buttercream frosting drizzled with homemade salted caramel.",
                image: "/src/assets/images/treats/salted.caramel.jpg",
                fanFavorites: true,  
                glutenFree: false
            }
        ]
    },
    {
        category: "Cookies",
        items: [
            {
                name: "Chocolate Chip Cookies",
                description: "",
                image: "",
                fanFavorites: true,  
                glutenFree: false
            },
            {
                name: "Molasses Cookies",
                description: "",
                image: "",
                fanFavorites: false,  
                glutenFree: true
            },
            {
                name: "S'mores",
                description: "",
                image: "/src/assets/images/treats/smores.jpg",
                fanFavorites: true,  
                glutenFree: false
            },
            {
                name: "Peanut Butter Cookies",
                description: "",
                image: "",
                fanFavorites: false,
                glutenFree: false
            }
        ]
    },
    {
        category: "Other Treats",
        items: [
            {
                name: "Dog Treats",
                description: "",
                image: "",
                fanFavorites: true, 
                glutenFree: true
            }
        ]
    }
];

function renderTreats() {
    const container = document.getElementById('treats-container');
    if (!container) {
        console.error("No container with ID 'treats-container' found.");
        return;
    }

    treats.forEach(category => {
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category.category;
        container.appendChild(categoryHeader);

        const itemsContainer = document.createElement('div');
        itemsContainer.classList.add('items-container');

        category.items.forEach(item => {
            const treatDiv = document.createElement('div');
            treatDiv.classList.add('treat-item');
            treatDiv.innerHTML = `
                <img src="${item.image || 'placeholder.jpg'}" alt="${item.name}" class="treat-image">
                <h3>${item.name}
                    ${item.fanFavorites ? '<i class="fa fa-star" style="color:gold; margin-left: 8px;"></i>' : ''} 
                    ${item.glutenFree ? '<i class="fa fa-leaf" style="color:green; margin-left: 8px;"></i>' : ''} 
                </h3>
                <p>${item.description}</p>
            `;
            itemsContainer.appendChild(treatDiv);
        });

        container.appendChild(itemsContainer);
    });
}

document.addEventListener('DOMContentLoaded', renderTreats);
