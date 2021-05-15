const fs = require("fs")

import_file = (library) => global.library = require(library)
print = console.log
str = (string) => string.toString()
len = (object) => object.length
hex = (number) => "0x" + number.toString(16)
ord = (string) => string.charCodeAt(0)
exit = (code) => process.exit(code)
quit = exit
type = (obj) => typeof obj
bool = (obj) => {
    if (0 === obj.length){return false}
    else if (Object.keys(obj).length === 0 && typeof obj === 'object'){return false}
    else return Boolean(obj)
}

any = (list) => {
    for (i = 0; i < len(list); i++){
        print(bool(i))
    }
}

sum = (iter, type) => {
    if (Array.isArray(iter)){
        return iter.reduce((a, b) => a + b, 0)
    }
}

function open(file, mode){
    // import_file("fs")
    let read
    if (mode === "r"){
        // fs.readFile(file, "utf8", (error, data) => {global(read) = data; print(data)})
        // print()
        return read
    }
}


if (require.main === module){
    // print(open("file.txt", "r"))
    any([1, []])
}

