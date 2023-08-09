const kataTestsAsText = [
  [
    'The Fibbonaci number of n = 0 should be 0',
    'The Fibbonaci number of n = 4 should be 3',
    'The Fibbonaci number of n = 10 should be 55',
    'Your function should return a correct value for n = 15',
    'Your function should return a correct value for n = 20',
    'Your function should be able to handle larger numbers, with Fn(n) ~= 100,000,000',
  ],
  [
    'Should filter a small array with a mix of Likes_LOTR true and false',
    'Should return an empty array for an input with all Likes_LOTR false keys',
    'Should return an array with only Likes_LOTR true unchanged',
  ],
  [
    `Should return 19 for the following string, "When tieing your shoelace, we recommend a double bow.  This is a simple yet effective knot,
    that is great at maintaining stability"`,
    `Should correctly handle the following string: "Sailors have always known knots.  The anchor hitch is a beauty of a knot,
    so is the old buntline hitch."`,
    `Should correctly handle the following string: "Alexander the Great was not a knot enthusiast.  He used his sword to unravel the
    legendary Gordian Knot from an oxcart and so become ruler of Phrygia.  Admittedly his large army helped."`,
  ],
];

kataTestsAsText.forEach((array) => {
  array.unshift(
    'You must return a function in the correct format.  This is the easy one!  Just follow the instructions and keep the starter code skeleton in place',
  );
});

export { kataTestsAsText };
