async function onMyBirthDayAsync(isKayoSick) {
    if (!isKayoSick) return 2;
    throw new Error('I am sad');
};
async function doSomethingAsync() {
    try {
        let result = await onMyBirthDayAsync(false);
        console.log(`I have ${result} cakes`);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        console.log('Party');
    }
};
doSomethingAsync();
