const treats = [
    {
        category: "Cupcakes",
        items: [
            {
                name:"Vanilla Cupcake",
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
                image: "",
                specialFeatures: "A perfect blend of coffee and sweetness!",
            },
            {
                name: "Lemon Blueberry",
                description: "Vanilla cupcake with blueberries inside and topped with blueberry and buttercream frosting.",
                image: "",
                specialFeatures:""
            },
            {
                name: "Chocolate Peanut Butter",
                description: "Chocolate cupcake with peanut butter frosting.",
                image: "",
                specialFeatures: ""
            }
        ]
    }
];

function renderTreats() {
    treats.forEach(category => {
        const container = document.getElementById(`${category.category.toLowerCase().replace("", "-")}-items`);
        category.items.forEach(item => {
            const treatDiv = document.createElement('div');
            treatDiv.classList.add('treat-item');
            treatDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Special Features:</strong> ${item.specialFeatures}</p>
            `;
            container.appendChild(treatDiv);
        });
    });
}

document.addEventListener('DOMContentLoaded', renderTreats);