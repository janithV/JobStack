function search1(req, res, next){

    var searchTerm = req.query.search;
    var category = req.query.category;

    let query = "SELECT * FROM company"; 
    if(searchTerm != '' && category!= ''){
        query = 'SELECT companyName from company'
    }

    database.query(query, (err, result) => {
        if (err){

            req.searchResult = '';
            req.searchTerm = '';
            req.category = '';
            
            next();
        }


        req.searchResult=result;
        req.searchTerm= searchTerm;
        req.category= '';

        next();

    });
}