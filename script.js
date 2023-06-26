

   
    fetchNewsArticles();
    
    async function fetchNewsArticles() {
  const apiKey = "YOUR_API_KEY"; 

  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_252041112abaf9b067a7f61c13ffe5a79584e`
    );
    const data = await response.json();
    console.log(data);

    const articles = data.results || []; 

    const rootDiv = document.getElementById("root");
    rootDiv.innerHTML = ""; 

    if (articles.length === 0) {
      const noResultsElement = document.createElement("p");
      noResultsElement.textContent = "No articles found.";
      rootDiv.appendChild(noResultsElement);
    } else {
      articles.forEach((article) => {
        const { title, description, image_url } = article;

        const articleDiv = document.createElement("div");
        articleDiv.classList.add("w3-quarter");

        const imageElement = document.createElement("img");
        imageElement.src = image_url;
        imageElement.alt = title;
        imageElement.style.width = "100%";
        imageElement.style.height = '200px';
        imageElement.style.objectFit = "cover"

        const titleElement = document.createElement("h3");
        titleElement.textContent = title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;

        articleDiv.appendChild(imageElement);
        articleDiv.appendChild(titleElement);
        articleDiv.appendChild(descriptionElement);

        rootDiv.appendChild(articleDiv);
      });
    }
  } catch (error) {
    console.error("Error fetching news articles:", error);
    const errorElement = document.createElement("p");
    errorElement.textContent = "Error fetching news articles. Please try again later.";
    rootDiv.appendChild(errorElement);
  }
}

    
