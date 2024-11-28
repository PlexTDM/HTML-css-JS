const getSeason = (uliral) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let index = months.indexOf(uliral) + 1
    switch (true) {
        case (index == 12 || index <= 2):
            console.log('Winter')
            break;
        case 3 <= index <= 5:
            console.log('Spring')
            break;
        case 6 <= index <= 8:
            console.log('Summer')
            break;
        case 9 <= index <= 11:
            console.log('Autumn')
            break;
        default:
            console.log(index)
            break;
    }
}

getSeason('August')