document.addEventListener("DOMContentLoaded", () => {
    // overlay
    const loader = document.createElement("div");
    loader.id = "loader";

    // image
    const img = document.createElement("img");
    img.src = "assets/1.png";
    img.alt = "loading";

    // text
    const text = document.createElement("div");
    text.id = "loading-text";
    text.innerHTML = `loading<span id="dots">.</span>`;

    loader.appendChild(img);
    loader.appendChild(text);
    document.body.appendChild(loader);

    // styles
    const style = document.createElement("style");
    style.textContent = `
        #loader {
            position: fixed;
            inset: 0;
            background: pink;
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }

        #loader img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
        }

        #loading-text {
            font-family: system-ui, sans-serif;
            font-size: 1.2rem;
            letter-spacing: 1px;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // animated dots
    const dots = text.querySelector("#dots");
    let count = 1;

    const dotInterval = setInterval(() => {
        count = (count % 3) + 1;
        dots.textContent = ".".repeat(count);
    }, 500);

    // remove loader when page loads
    window.addEventListener("load", () => {
        clearInterval(dotInterval);
        setTimeout(() => loader.remove(), 500);
    });
});
