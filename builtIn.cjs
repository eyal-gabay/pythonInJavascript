const fs = require("fs")

import_file = (library) => global.library = require(library)
print = console.log
str = (string) => string.toString()
len = (object) => object.length
hex = (number) => "0x" + number.toString(16)
ord = (string) => string.charCodeAt(0)
exit = (code) => process.exit(code)
bool = (obj) => {
    if (0 === obj.length){return false}
    else if (Object.keys(obj).length === 0 && typeof obj === 'object'){return false}
    else return Boolean(obj)
}

// __file__ = __filename

function open(file, mode){
    import_file("fs")
    if (mode === "r"){
        fs.readFile(file, "utf8", (error, data) => {return data})
    }
}


if (require.main === module){
    print(open("file.txt", "r"))
}



