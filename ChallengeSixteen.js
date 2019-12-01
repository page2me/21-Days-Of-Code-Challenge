// #16
// Instructions: We'll complete a function festivalColours() that calculates the split complementary colours for a given colour. We'll be working with a special colour system called HSL, which stands for Hue, Saturation, and Lightness.

// Here's an example of an HSL colour picker.

// The function will receive an H(Hue) value, and must return an array of the values for the two split complementary colours. The smaller number should be the first element, and the larger number should be the second element.

// You can take a peek at this website for the formula you'll need to use to calculate the split complementary colours.


const festivalColours = color1 => {
    var splitColorOne = (color1 + 150);
    var splitColorTwo = (color1 + 210);

    return [splitColorOne, splitColorTwo];
}