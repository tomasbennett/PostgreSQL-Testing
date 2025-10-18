const db = require("../db/queries");




exports.newMessageCreatedPOST = async (req, res) => {
    const { username } = req.body;
    if (username && typeof username === "string" && username.length > 0) {

        await db.insertUsername(username);
    
        res.redirect("/");
        return;
    }

    

};


exports.showAllMessages = async (request, response) => {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);


    response.render("index", { pageTitle: "Home", messages: usernames });
}


exports.createNewMessageForm = (request, response) => {
    response.render("new", { pageTitle: "New Message" });
}