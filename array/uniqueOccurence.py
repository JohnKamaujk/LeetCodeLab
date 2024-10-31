from typing import Counter


class Solution:
    def uniqueOccurrences(self, arr) -> bool:
        frequency = Counter(arr)

        freq_arr = list(frequency.values())

        return len(freq_arr) == len(set(freq_arr))