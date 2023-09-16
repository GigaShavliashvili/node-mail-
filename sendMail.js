const sendMailTo = require("./mailOptions");

exports.sendMail = async (req, res) => {
    const { text, mail } = req.body;
    console.log(text, mail)
    if (text && mail) {
        sendMailTo(mail, "exmample", text, `http://localhost:5173?mail=${mail}`, (err, info) => {
            if (err) {
                console.log(err)
            }
            return info;
        })
    }
 }