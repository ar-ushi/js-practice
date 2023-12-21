function getElementsByClassName(className){
    const result = [];
    for (const ele of DOMTree.elements){
        if (ele.className === className){
            result.push(ele);
        }
    }
    return result;
}

function getElementsByTagName(tagName){
    const result = [];
    for (const ele of DOMTree.elements){
        if (ele.tagName === tagName){
            result.push(ele);
        }
    }
    return result;
}

