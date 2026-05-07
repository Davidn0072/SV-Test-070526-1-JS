//arr = [1, 2, 3, 4, 6, 5, 1];
//arr = [3, 3, 1, 2, 3];
arr = [1, 2, 1, 2, 3];
//[1,2,3] -  [5,1]

function ChhkSeq(arr, targetNo) {

    let seqCount = 0;

    for (let start = 0; start < arr.length; start++) {
        let sum = 0;

        for (let end = start; end < arr.length; end++) {

            if (typeof arr[end] !== "number") {
                throw new Error("Invalid Nubers Vals");
            }

            sum += arr[end];

            if (end - start + 1 >= 2 && sum === targetNo) {
                seqCount++;
            }

            if (sum > targetNo) break;
        }
    }

    return seqCount;
}

console.log(ChhkSeq(arr, 6))