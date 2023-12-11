# Given a 2D integer array matrix, return the transpose of matrix.

# The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

# Example 1:
# Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
# Output: [[1,4,7],[2,5,8],[3,6,9]]

# Example 2:
# Input: matrix = [[1,2,3],[4,5,6]]
# Output: [[1,4],[2,5],[3,6]]

class Solution:
    def transpose(self, matrix:List[List[int]])-> List[List[int]]:
        output = []
        row = len(matrix)
        col = len(matrix[0])
          # Initialize the output array
        for i in range(col):
            output.append([0] * row)
        for i in range(row):
            output[i] = []
            for j in range(col):
                output[i][j] = matrix[j][i]
        return output