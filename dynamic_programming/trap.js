/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

function trap(heights) {
  let maxArea = 0;
  let left = 0,
    right = heights.length - 1;
  let maxLeft = heights[left],
    maxRight = heights[right];
  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, heights[left]);
      maxArea += maxLeft - heights[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, heights[right]);
      maxArea += maxRight - heights[right];
    }
  }
  return maxArea;
}
