<script>
function addReview() {
  const name = document.getElementById("reviewer-name").value.trim();
  const text = document.getElementById("review-text").value.trim();

  if(name === "" || text === "") {
    alert("Please fill out both fields.");
    return;
  }

  const reviewList = document.getElementById("reviews-list");

  // Create review box
  const reviewBox = document.createElement("div");
  reviewBox.className = "review-box";
  reviewBox.innerHTML = `<h4>${name}</h4><p>${text}</p>`;

  // Add review to top of list
  reviewList.prepend(reviewBox);

  // Clear form
  document.getElementById("reviewer-name").value = "";
  document.getElementById("review-text").value = "";
}
</script>
