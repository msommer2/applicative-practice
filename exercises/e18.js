/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { data } from '../data/data.js';

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  
  const yearCounts = {};
  for (const asteroid of data.asteroids) {
    const year = asteroid.discoveryYear;
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  }

  const mostFrequentYear = Object.keys(yearCounts).reduce((a, b) => 
    yearCounts[a] > yearCounts[b] ? a : b
  );

  return Number(mostFrequentYear);

}

console.log(getGreatestDiscoveryYear(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command 
// after you've fixed the function
