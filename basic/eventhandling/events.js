function simpleClick() {
 alert('you clicked a btn')
}

function handler(e) {
    function str(e1){
        return !e1 ? null : e1.className||e1.tagName;
    }
    
}