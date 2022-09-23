function sortedSquares(nums: number[]): number[] {
    return nums.map((num:number) => num * num).sort((a,b) => a-b);
};