// Write your solution in this file!
// let driver = new Object()
const driver = {}

// does not mutate original
function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = { ...driver }
    newDriver[key] = value
    return newDriver
}

// mutates the orignal
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

// deletes; nondestructive
function deleteFromDriverByKey(driver, key){
    const newDriver = { ...driver }
    delete newDriver[key]  // delete newDriver.key --> does not work 
    return newDriver

    // also works:
        // const newDriver = Object.assign({}, driver)
        // delete newDriver[key] 
        // return newDriver
}

//  deletes; destructive
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}


