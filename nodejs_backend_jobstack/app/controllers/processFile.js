var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "RtG8BK6Pbe",
  password: "bXH6YfYQMr",
  database: "RtG8BK6Pbe"
});

con.connect(function(err) {
if (err) console.log(err);
console.log("Connected!");

});

exports.callName = (req, res) => {
    let userId = req.body.userId;
    userid = 2;

    con.query("SELECT * FROM UserTable WHERE userId = ? ", [userid], function (err, result, fields) {
        if (err) throw err;

        console.log(result);
        
        var spawn = require("child_process").spawn; 

        var codingskills = "ck"+result[0].codingSkill;
        var socialskills = "ss"+result[0].socialSkill;
        var languageskills = "ls"+result[0].languageSkill;
        var programdev = "pd"+result[0].programDevelopment;
        var frontenddev = "fd"+result[0].frontEndDevelopment;
        var backenddev = "be"+result[0].backEndDevelopment;
        var fullstack = "fs"+result[0].fullStack; 
        var mobiledev = "md"+result[0].mobileDevelopment;
        var webdev = "wd"+result[0].webDevelopment;
        var uiUx = "u"+result[0].uiUx;
        var degree = result[0].degreeId;

        console.log(userid,codingskills,socialskills,languageskills,programdev,frontenddev,backenddev,fullstack,mobiledev,webdev,uiUx,degree);

        var process = spawn('python',["./processFile.py",userid,codingskills,socialskills,languageskills,programdev,frontenddev,backenddev,fullstack,mobiledev,webdev,uiUx,degree]); 

        var list = "";
        process.stdout.on('data', function(data) {
            var company = data.toString().split('"');
            for(x in company){
                if(company[x].includes("CID")){
                    list = list + (company[x]+",");
                }   
            }
            console.log("Compnaies :" + list);

            var companyD = list.split(",");
            for(i=0; i<(companyD.length-1);i++){
                var sql = "INSERT INTO UserCompanyTable (companyId, userId) VALUES (?,?)";
                con.query(sql, [companyD[i],userid],function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });
            }
            console.log(companyD);
            res.send("Compnaies :" + list); 
        });
    });
}
