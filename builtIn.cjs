__import__ = (library) => global.library = require(library)
print = console.log
str = (string) => string.toString()
len = (object) => object.length
hex = (number) => "0x" + number.toString(16)
ord = (string) => string.charCodeAt(0)
exit = (code) => process.exit(code)
quit = exit
type = (obj) => typeof obj

const fs = __import__("fs")

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

all = (list) => {
    for (let i = 0; i < len(list); i++){
        print(bool(i))
    }
}

sum = (iter, type) => {
    if (Array.isArray(iter)){
        return iter.reduce((a, b) => a + b, 0)
    }
}

copyright = () => print("eyal gabay created this library")

function open(path, mode, encode="utf-8"){
    if (mode === "r"){
        return fs.readFileSync(path, encode)

    }
}

// print(require.main === undefined)
print(module)
if (require.main === module){

}

