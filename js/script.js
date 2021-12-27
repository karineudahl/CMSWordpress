const contentContainer = document.querySelector(".content-container"); 

const url = "https://student-noroff.store/project-exam-1/wp-json/wp/v2/posts?per_page=100"; 

async function getBlogpost() {
    try {
        const response = await fetch(url);
        products = await response.json();

        contentContainer.innerHTML = "";

        products.forEach(function(product) {
            contentContainer.innerHTML += `<h2></h2>
                                            <p></p>`;
        })
        
    }

    catch(error) {
        contentContainer.innerHTML = "An error has occured";
    }
}

getBlogpost(); 