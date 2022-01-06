function capitalize(myString) {
    let lowerMyString = myString.toLowerCase();
    let finalString = lowerMyString.replace(lowerMyString[0], lowerMyString[0].toUpperCase());
    return finalString;
}