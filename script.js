const API_URL = "https://dog.ceo/api/breeds/image/random";
    const loader = document.querySelector(".loader");
    const img = document.querySelector("#dog_img");

    function handleDogApi() {
      loader.style.display = "block";
      img.style.opacity = 0;
      img.style.display = "block";

      const startTime = Date.now();

      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          const tempImg = new Image();
          tempImg.src = data.message;

          tempImg.onload = () => {
            const elapsed = Date.now() - startTime;
            const delay = Math.max(0, 800 - elapsed);

            setTimeout(() => {
              img.src = tempImg.src;
              loader.style.display = "none";
              img.style.opacity = 1;
            }, delay);
          };

          tempImg.onerror = () => {
            loader.textContent = "Couldn't load dog ";
          };
        })
        .catch(() => {
          loader.textContent = "Something went wrong!";
        });
    }

    window.onload = handleDogApi;