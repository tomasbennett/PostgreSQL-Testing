exports.newMessageCreatedPOST = (req, res) => {
    res.redirect("/");
};


exports.showAllMessages = (request, response) => {
    response.render("index", { pageTitle: "Home" });
}


exports.createNewMessageForm = (request, response) => {
    response.render("new", { pageTitle: "New Message" });
}