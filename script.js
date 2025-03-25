function playAudio() {
    document.getElementById("audio").play();
}

function set() {
    playAudio();
    document.getElementById("audio").currentTime = 0;

    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("birthday", document.getElementById("birthday").value);
    localStorage.setItem("bio", document.getElementById("bio").value);
    localStorage.setItem("quote", document.getElementById("quote").value);
    
    const file = document.getElementById("profilePic").files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        localStorage.setItem("profilePic", event.target.result);
        window.location.href = "feedPage.html";
    };

    reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("createBtn").addEventListener("click", setAndAudio);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("displayName").innerText = localStorage.getItem("name");
    document.getElementById("displayBio").innerText = localStorage.getItem("bio");
    document.getElementById("displayQuote").innerText = '"' + localStorage.getItem("quote") + '"';
    document.getElementById("displayPic").src = localStorage.getItem("profilePic") || "default.jpg";
});

function postTweet() {
    playAudio();
    document.getElementById("audio").currentTime = 0; // Reset audio to start

    var tweetText = document.getElementById("tweetInput").value;
    var tweetFeed = document.getElementById("tweetFeed");
    var tweetDiv = document.createElement("div");
    
    tweetDiv.className = "tweet";
    tweetDiv.innerHTML = tweetText + ' <span class="heart" onclick="toggleHeart(this)" style="color: black; cursor: pointer;">🖤</span>';
    tweetFeed.prepend(tweetDiv);
    
    document.getElementById("tweetInput").value = "";
}

function toggleHeart(el) {
    playAudio();
    document.getElementById("audio").currentTime = 0;

    var states = ["🖤", "❤️"];
    var colors = ["black", "red"];
    var currentIndex = states.indexOf(el.innerHTML);
    el.innerHTML = states[(currentIndex + 1) % states.length];
    el.style.color = colors[(currentIndex + 1) % colors.length];
}