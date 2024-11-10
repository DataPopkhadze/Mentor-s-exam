document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("reviewer-name").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ name, rating, comment });

    localStorage.setItem("reviews", JSON.stringify(reviews));
    alert("Review added!");
    displayReviews();
});

function displayReviews() {
    const reviewsSection = document.getElementById("reviews");
    reviewsSection.innerHTML = "";

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        reviewCard.innerHTML = `
            <h4>${review.name} - Rating: ${review.rating}/5</h4>
            <p>${review.comment}</p>
        `;
        reviewsSection.appendChild(reviewCard);
    });
}

document.addEventListener("DOMContentLoaded", displayReviews);
