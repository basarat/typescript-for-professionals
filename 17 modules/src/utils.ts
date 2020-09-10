/** 
 * @returns true if the input string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}
