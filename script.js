document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery')

    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(products => {
            console.log(products);
            products.slice(0, 10).forEach(products => {

                gallery.innerHTML += `
                    <div class="photo-card">
                        <img src="${products.images[1]}" alt="">
                        <p>${products.title}</p>
                    </div>
                `;
            });
        })

});