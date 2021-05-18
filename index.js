const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, {[key]: value })
}  

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value 
    return driver 
    
}

function deleteFromDriverByKey(driver) { 
    const drive = Object.assign({}, driver) 
    delete drive.key 
    return drive 
}

function destructivelyDeleteFromDriverByKey(driver, key) {

}