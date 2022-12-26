const express = require("express");
const router = express.Router();

router.post("/search", (req, res) => {
    const text = req.body.Search;
    const cities = ["bali", "annapurna", "inca", "paris", "rome", "santorini"];
    const results = [];
    const i = 0
    for (const city of cities) {
        if (city.includes(text)) {
            results.push(city);
        }
    }
    res.render("searchresults", { results });
}

)




module.exports = router;