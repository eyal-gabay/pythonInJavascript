const fs = require("fs")

import_file = (library) => global.library = require(library)
print = console.log
str = (string) => string.toString()
len = (object) => object.length
__file__ = () => __filename

function open(file, mode){
    import_file("fs")
    if (mode === "r"){
        fs.readFile(file, "utf8", (error, data) => {return data})
    }
}


if (require.main === module){
    print(open("file.txt", "r"))
}



