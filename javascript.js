// community
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("textarea");
    const studyDiv = document.getElementById("study");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const userName = document.getElementById("user_name").value;
        const userPost = document.getElementById("user_post").value;

        if (userName && userPost) {
            const newPost = document.createElement("div");
            newPost.classList.add("post");

            const currentDate = new Date();
            const formattedDate = new Intl.DateTimeFormat('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }).format(currentDate);

            newPost.innerHTML = `
                <p class="user_name">${userName}</p>
                <p class="user_post">${userPost}</p>
                <br>
                <span>${formattedDate}</span>
            `;

            studyDiv.appendChild(newPost);

            form.reset();
        }
    });
});
