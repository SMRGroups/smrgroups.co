document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('product-search');
    const products = document.querySelectorAll('.product');
    const sections = document.querySelectorAll('.product-section');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        let hasResults = false;

        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
                hasResults = true;
            } else {
                product.style.display = 'none';
            }
        });

        sections.forEach(section => {
            const sectionProducts = section.querySelectorAll('.product');
            let sectionHasResults = false;
            sectionProducts.forEach(product => {
                if (product.style.display === 'block') {
                    sectionHasResults = true;
                }
            });
            section.style.display = sectionHasResults ? 'block' : 'none';
        });

        if (!searchTerm) {
            products.forEach(product => product.style.display = 'block');
            sections.forEach(section => section.style.display = 'block');
        }
    });
});


// Function to open the popup
function openPopup(button) {
    // Get product data from the button's parent element
    const product = button.parentElement;
    const name = product.getAttribute('data-name');
    const description = product.getAttribute('data-description');
    const quality = product.getAttribute('data-quality');
    const features = product.getAttribute('data-features');

    // Set popup content
    document.getElementById('popup-title').innerText = name;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup-image').src = product.querySelector('img').src;
    
    // Populate features list
    const featuresList = document.getElementById('popup-features');
    featuresList.innerHTML = ''; // Clear previous features
    features.split(',').forEach(feature => {
        const li = document.createElement('li');
        li.innerText = feature.trim();
        featuresList.appendChild(li);
    });

    // Show the popup and blur the background
    document.getElementById('popup-container').style.display = 'flex';
    document.body.classList.add('popup-open');
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
    document.body.classList.remove('popup-open');
}

// Event listeners
document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', () => openPopup(button));
});

document.getElementById('popup-close').addEventListener('click', closePopup);
document.getElementById('popup-container').addEventListener('click', (event) => {
    if (event.target === document.getElementById('popup-container')) {
        closePopup();
    }
});
