document.getElementById("recommendation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("new-recommendation");
  const text = input.value.trim();

  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;

    document.getElementById("recommendation-list").appendChild(li);
    input.value = "";

    alert("Thank you! Your recommendation was added.");
  }
});
