// localhost8080/api/nasa
$.get("/api/nasa", function(data) {
    $('#apod-img').attr('src', data.url)
    $('#apod-title').text(data.title)

    let row = $("<div>")
    row.addClass("apod")

    row.append("<p>" + data.date + "</p>")
    row.append("<p>" + data.copyright + "</p>")
    row.append("<p>" + data.explanation + "</p>")

    $("#apod-detail").append(row)
})

$("#comment-submit").on("click", function(event) {
    event.preventDefault()

    var newPost = {
        title: $("#title").val().trim(),
        body: $("#comment-box").val().trim(),
        created_at: new Date()
    }
    console.log(newPost)

    $.post("/api/posts/new", newPost).then(function() {

        let row = $("<div>")
        row.addClass("reply")
    
        row.append("<p>" + newPost.title + "</p>")
        row.append("<p>" + newPost.body + "</p>")
        row.append("<p>" + newPost.created_at + "</p>")
    
        $("#comments").append(row)
    })
})