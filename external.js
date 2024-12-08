"use strict";

const usercollage = document.querySelector(".usercollage");
const usercomment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const commentCount = document.querySelector("#Comment");
const usernameInput = document.querySelector(".user"); 


usercomment.addEventListener("input", () => {
    togglePublishButton();
});
usercollage.addEventListener("change", () => {
    togglePublishButton();
});


function togglePublishButton() {
    if (!usercomment.value.trim() || usercollage.value === "") {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
}

publishBtn.addEventListener("click", () => {
    const commentText = usercomment.value.trim();
    const selectedCollage = usercollage.value;
    const username = usernameInput.value.trim() || "Anonymous";

    if (commentText && selectedCollage) {
        // Comment div
        const newComment = document.createElement("div");
        newComment.classList.add("comment");

        // Collage name
        const collageName = document.createElement("div");
        collageName.textContent = selectedCollage;
        collageName.classList.add("collage-name");

        //User name and commentText
        const userAndComment = document.createElement("div");
        userAndComment.textContent = `${username} : ${commentText}`;
        userAndComment.classList.add("user-comment");

        // Combine elements and add them to the DOM
        newComment.appendChild(collageName);
        newComment.appendChild(userAndComment);
        comments.appendChild(newComment);

        // Reset comment box and college selection
        usercomment.value = "";
        usercollage.value = "";
        togglePublishButton();

        // Comment number
        commentCount.textContent = parseInt(commentCount.textContent) + 1;
    }
});

$(document).ready(function () {
            // Show button how it works
            $(".show-btn").click(function () {
                $(this).closest(".card-body").find("p").show();
            });

            // Hide button how it works
            $(".hide-btn").click(function () {
                $(this).closest(".card-body").find("p.card-text").hide();
            });
            $(".card-text").html(function (_, html) {
                return html.replace("Anonymous", "<b>Anonymous</b>");
            });
        });

