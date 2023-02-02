/**
 * Formats WKT string to add a new line and tabs for each WKT property.
 *
 * @param {string} inputStr - WKT string
 * @returns formatted string
 */
function formatWKTString(inputStr) {
  const properties = inputStr.match(/\b\w+['[']/g); // ['PROJCS[', 'TOWGS84[', ...]

  let str = inputStr.replaceAll(/\n\s*/g, "").replaceAll(/,\s*/g, ", "); // string that will be mutated
  let tabCounter = 0;
  let outputStr = "";

  for (let i = 0; i < properties.length; i++) {
    let curPos = str.indexOf(properties[i]);
    let nextPos = str.indexOf(properties[i + 1]);

    // Duplicate properties.
    if (curPos === nextPos) {
      nextPos = str.indexOf(properties[i], curPos + 1);
    }

    // Last property.
    if (i === properties.length - 1) {
      nextPos = str.length;
    }

    // Populate the output string.
    for (let j = curPos; j < nextPos; j++) {
      outputStr += str[j];

      if (str[j] === "[") {
        tabCounter++;
      }
      if (str[j] === "]") {
        tabCounter--;
      }
    }

    // if not last property
    if (i !== properties.length - 1) {
      // Add a new line.
      outputStr += "\n";

      // Add tabs.
      for (let k = 0; k < tabCounter; k++) {
        outputStr += "\t";
      }
    }

    // Slice the string after populating a part of the output string
    // to be able to search for duplicate properties.
    str = str.slice(curPos + properties[i].length - 1);
  }

  return outputStr;
}

module.exports = formatWKTString;
