function set() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("birthday", document.getElementById("birthday").value);
    localStorage.setItem("bio", document.getElementById("bio").value);
    localStorage.setItem("quote", document.getElementById("quote").value);

    const file = document.getElementById("profilePic").files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        localStorage.setItem("profilePic", event.target.result);
        window.location.href = "feed.html";  
    };

    reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("displayName").innerText = localStorage.getItem("name");
    document.getElementById("displayBio").innerText = localStorage.getItem("bio");
    document.getElementById("displayQuote").innerText = `"${localStorage.getItem("quote")}"`;

    document.getElementById("displayPic").src = localStorage.getItem("profilePic") || "default.jpg";
});

document.addEventListener("DOMContentLoaded", function() {
    const postBtn = document.getElementById("postBtn");
    const audio = document.getElementById("audio");

    postBtn?.addEventListener("click", function() {
        const tweetText = document.getElementById("tweetInput")?.value;
        const tweetFeed = document.getElementById("tweetFeed");
        const tweetDiv = document.createElement("div");

        tweetDiv.className = "tweet";
        tweetDiv.innerHTML = `${tweetText} <span class='heart' style="color: black; cursor: pointer;">🖤</span>`; 
        tweetFeed.prepend(tweetDiv);
        
        document.getElementById("tweetInput").value = "";

        audio.play();
    });
});

document.addEventListener("click", function(event) {
    const heart = event.target;
    const isLiked = heart.innerHTML === "❤️";

    heart.classList.contains("heart") && (
        heart.innerHTML = isLiked ? "🖤" : "❤️",
        heart.style.color = isLiked ? "black" : "red"
    );
});
