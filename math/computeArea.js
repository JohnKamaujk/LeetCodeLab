/**
Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    let areaOfA = (ax2 - ax1) * (ay2 - ay1);
    let areaOfB = (bx2 - bx1) * (by2 - by1);

    let smlRect_L = bx1 > ax1 ? bx1 :ax1;
    let smlRect_R = bx2 < ax2 ? bx2 :ax2;
    let smlRect_B = by1 > ay1 ? by1 :ay1;
    let smlRect_T = by2 < ay2 ? by2 :ay2;

    let areaOfsmlRect = 0;

    if(smlRect_R >smlRect_L && smlRect_T>smlRect_B){
        areaOfsmlRect = (smlRect_R - smlRect_L) * (smlRect_T - smlRect_B);
    }

    return (areaOfA + areaOfB) - areaOfsmlRect;

};