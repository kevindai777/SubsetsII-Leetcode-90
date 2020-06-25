//Objective is the same as 'Subsets' but now we have duplicate elements.
//We also cannot have repeating sets.

let nums = [1,2,2]


//O(N!/(N - k)! * k!) solution (same as 'Subsets')

//We sort the elements first to makes sure we skip any repeating elements
nums.sort((a,b) => {
    return a - b
})

let temp = []
let index = 0
let result = []

backtrack(temp, index)

function backtrack(temp, index) {
    result.push([...temp])

    for (let i = index; i < nums.length; i++) {
        //skip any of the same elements
        if (i !== index && nums[i] == nums[i - 1]) {
            continue
        }

        backtrack([...temp, nums[i]], i + 1)
    }
}

return result