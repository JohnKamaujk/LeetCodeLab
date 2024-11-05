class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

         # Create a dictionary to store the frequency of characters in s
        counter = {}

        # Increment the count for each character in s
        for char in s:
            if char in counter:
                counter[char] += 1
            else:
                counter[char] = 1

         # Decrement the count for each character in t
        for char in t:
            if char in counter:
                counter[char] -= 1
            else:
                # If a character in t is not in s, they can't be anagrams
                return False

        # Check if all counts in the dictionary are zero
        return all(count == 0 for count in counter.values())
        