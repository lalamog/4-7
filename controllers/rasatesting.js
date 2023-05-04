const db1 = require("../routes/rasa-db");

const rasatesting = async(req , res) =>{
    const {start_date, end_date} = req.body
        console.log(start_date);
        console.log(end_date);
        db1.query('INSERT INTO inputted_table SET ?' , {start_date:start_date , end_date:end_date},(error, results) => {
            if(error) throw error;
            return res.json({ status: "success", success: "Date Already Successfully Inputted" })
        })
    }

module.exports = rasatesting;