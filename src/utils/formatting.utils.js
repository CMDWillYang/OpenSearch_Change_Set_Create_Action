/**
 * Formats an error message with specific styling and returns it as an HTML string.
 * It transforms the PascalCase 'name' of the error to spaced string, makes it bold,
 * prefixes it with a cross mark emoji, and places the 'message' in a paragraph.
 *
 * @param {Object} input - The input object to format.
 * @param {string} type - The type of the input object.
 * @returns {string} Formatted error message as an HTML string.
 *

 */
export const formatPostComment = ({ input, type }) => {
  if (input.shouldResultInPRComment) {
    const title =
      input.name.replace(/([A-Z])/g, " $1")
      .trim()
      .split(" ")
      .slice(0, -1)
      .join(" ");
    const body = input.message;
    const prefix = type === "ERROR" ? "❌" : type === "INFO" ? "ℹ️" : "";
    return prefix ? `### ${prefix} ${title}\n\n${body}\n` : input.message;
  }
  return input.message;
};

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The string to be capitalized.
 * @returns {string} The capitalized string if the input is a valid string,
 *                   otherwise returns the original input.
 */
export const capitalize = (str) => {
  if (str && typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};
