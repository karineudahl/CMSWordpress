const contentContainer = document.querySelector(".content-container"); 

const url = "https://student-noroff.store/fedup/wp-json/wp/v2/posts"; 

async function getBlogpost() {
    try {
        const response = await fetch(url);
        products = await response.json();

        contentContainer.innerHTML = "";

        products.forEach(function(product) {
            contentContainer.innerHTML +=   `<div class="content">
                                                <h2>${product.title.rendered}</h2>
                                                <p>${product.content.rendered}</p>
                                            </div>`;
        })
        
    }

    catch(error) {
        contentContainer.innerHTML = "An error has occured";
    }
}

getBlogpost(); 