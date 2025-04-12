/*
    Problem Statement: You are creating a score management system for student results.
    Start with an array of 10 student scores.
    The program should do the following:

    For any student with a score below 40, increase their score by 20. 
    For students with scores over 90, adjust their score to a maximum of 90. 
    Count and log how many students passed (score of 50 or more) after the adjustments. 
    Log the final adjusted array of scores.
*/


let score=[20,23,50,1,15,80,93,94,65,71]


let updatedScore=score.map(el=>el<40?el+20:el>90?90:el)

let passedStudent= updatedScore.reduce((acc, curr) => curr>=50?acc=acc+1:acc, 0)

console.log(passedStudent)