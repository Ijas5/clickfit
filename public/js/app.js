$(document).ready(function () {

    $.ajax({
        url: "https://api.restful-api.dev/objects",
        method: "GET",

        success: function (data) {
            console.log(data);

            let html = "";

            data.forEach(function (item) {

                html += `
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card api-card h-100">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
            </div>
        </div>
    </div>
`;

            });

            $("#apiData").html(
                `<div class="row">${html}</div>`
            );
        },

        error: function (error) {
            console.log("API Error:", error);

            $("#apiData").html(
                "<p>Unable to load API data.</p>"
            );
        }
    });

});
$("#imageInput").on("change",function(){

     const file = this.files[0];

    console.log(file);

});

// Image preview function
function showPreview(file) {

    if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        $("#imagePreview").html(`
            <img src="${event.target.result}" alt="Image Preview">
        `);
    };

    reader.readAsDataURL(file);
}


// Choose Image
$("#imageInput").on("change", function () {

    const file = this.files[0];

    if (file) {
        showPreview(file);
        uploadImage(file);
    }
});


// Drag & Drop
const uploadBox = $(".upload-box");

uploadBox.on("dragover", function (event) {
    event.preventDefault();
    $(this).addClass("dragging");
});

uploadBox.on("dragleave", function () {
    $(this).removeClass("dragging");
});

uploadBox.on("drop", function (event) {

    event.preventDefault();

    $(this).removeClass("dragging");

    const file = event.originalEvent.dataTransfer.files[0];

    if (file) {
        showPreview(file);
        uploadImage(file);
    }
});

function uploadImage(file) {

    const formData = new FormData();

    formData.append("image", file);

    $.ajax({
        url: "/upload",
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,

        success: function (response) {
            console.log("Upload successful:", response);
        },

        error: function (error) {
            console.log("Upload failed:", error);
        }
    });
}