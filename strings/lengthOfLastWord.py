# Given a string s consisting of words and spaces, return the length
# of the last word in the string.

# A word is a maximal substring consisting of non-space characters only.

# Example 1:

# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.
# Example 2:

# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.
# Example 3:

# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.
import re


class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = re.findall(r'[a-zA-Z]+', s)
        return len(words[-1]) if words else 0
