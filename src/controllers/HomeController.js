import connection from '../configs/connectDB.js';
let getHomepage = (req, res) => {
    let data = []
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.first_name,
                    lastName: row.last_name
                })
            });

            return res.render('index.ejs', { dataUser: JSON.stringify(data) })
        }
    );

}

export default { getHomepage }
