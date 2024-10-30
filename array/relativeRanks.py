class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        sorted_score = sorted(score, reverse=True)
        dic = {}
        output = []

        for index, value in enumerate(sorted_score):
            if index == 0:
                dic[value] = "Gold Medal"
            elif index == 1:
                dic[value] = "Silver Medal"
            elif index == 2:
                dic[value] = "Bronze Medal"
            else:
                dic[value] = str(index+1)
        
        for scre in score:
            output.append(dic[scre])

        return output