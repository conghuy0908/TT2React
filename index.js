const name = [];
function is_usZipCode(name) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(name)) {
        return true;
    } 
    else{
    return false;
    }
    
}
