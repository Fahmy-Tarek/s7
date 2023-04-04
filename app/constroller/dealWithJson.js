const fs = require("fs")
class DealWithjSON{
    static writeJsonData = (fileName, data) =>{
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
    static readJsonData = (fileName) => {
        let result
        try{
            result = JSON.parse(fs.readFileSync(fileName))
            if(!Array.isArry(result) )throw new Error("not an array")
        }
        catch(e){
            result = []
        }
        return result
        
    }
    }
module.exports = DealWithjSON