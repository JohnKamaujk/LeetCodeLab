class Solution(object):
    def mySqrt(self, x):
        i = 1

        while (i*i <= x):
            if ((i*i) == x):
                return i
            i += 1

        return i-1
