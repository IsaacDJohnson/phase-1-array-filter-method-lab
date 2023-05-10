// Code your solution here

function findMatching(array, string){
    let newArray = []
    for (const name of array){
        if (name === string || name === string.toLowerCase()){
            newArray.push(name)
        }
    }
    return newArray
}

function fuzzyMatch(array, string){
    let newArray = []
    for (const name of array){
        if (name[0] === string[0]){
            newArray.push(name)
        }
    }
    return newArray;
}

function matchName(array, string){
    let newArray = []
    for (const name of array){
        if (name.name === string){
        newArray.push(name)
        }
    }
    return newArray
}
