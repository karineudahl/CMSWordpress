const contentContainer = document.querySelector(".content-container"); 

const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const url = "https://student-noroff.store/fedup/wp-json/wp/v2/posts/" + id;

async function blogDetails() {
    try {
        const response = await fetch(url);
        const details = await response.json(); 

        contentContainer.innerHTML +=   `<div class="details-content">
                                                <h1>${details.title.rendered}</h1>
                                                <p>${details.content.rendered}</p>
                                            </div>`;
    }

    catch(error) {
        contentContainer.innerHTML = "An error has occured"; 
    }
}

blogDetails();