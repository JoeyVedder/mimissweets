const treats = [
    {
        category: "Cupcakes",
        items: [
            {
                name: "Vanilla Cupcake",
                description: "Nothing beats a classic homemade Vanilla Cupcake with buttercream frosting!!",
                image: "",
            },
            {
                name: "Chocolate Cupcake",
                description: "Another classic!",
                image: "",
            },
            {
                name: "Chocolate Espresso Cupcake",
                description: "Chocolate cupcake topped with frosted buttercream.",
                image: "/src/assets/images/cupcakes/espresso.jpg",
                specialFeatures: "A perfect blend of coffee and sweetness!",
            },
            {
                name: "Lemon Blueberry",
                description: "Vanilla cupcake with blueberries inside and topped with blueberry and buttercream frosting.",
                image: "",
                specialFeatures: ""
            },
            {
                name: "Chocolate Peanut Butter",
                description: "Chocolate cupcake with peanut butter frosting.",
                image: "",
                specialFeatures: ""
            },
            {
                name: "Apple Pie",
                description: "Cinnamon cupcake with cinnamon apple filling topped with cinnamon buttercream frosting.",
                image: "",
                specialFeatures: ""
            },
            {
                name: "Salted Caramel",
                description: "Vanilla Cupcake with caramel buttercream frosting drizzled with homemade salted caramel.",
                image: "/src/assets/images/cupcakes/salted.caramel.jpg",
                specialFeatures: ""
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
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                ${item.specialFeatures ? `<p><strong>Special Features:</strong> ${item.specialFeatures}</p>` : ''}
            `;
            itemsContainer.appendChild(treatDiv);
        });

        container.appendChild(itemsContainer);
    });
}

document.addEventListener('DOMContentLoaded', renderTreats);
