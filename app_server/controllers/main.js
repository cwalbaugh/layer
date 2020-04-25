/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Layer'});
};

module.exports = {
    index
};
