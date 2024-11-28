 export const trimmedLengthOfTitle = (title) =>{
    let stringLength = title.length;
    const expectedLength = 30
    if (stringLength > expectedLength){
        return title.slice(0,expectedLength) + ('...')
    } else{
        return title
    }
}


