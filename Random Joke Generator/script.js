async function fetchJoke() {
    const jokeText = document.getElementById("joke-text");
    jokeText.innerHTML = "Loading...";
    
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        jokeText.innerHTML = data.value;
    } catch (error) {
        jokeText.innerHTML = "Failed to fetch joke. Try again!";
        console.error("Error fetching joke:", error);
    }
}