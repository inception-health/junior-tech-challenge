## Explanation

  I wish that I had selected this for the live coding challenge, this was fun to work on.

  I want to thank everyone who met with me today for the interview, I enjoyed talking to you all and I hope to speak with you again soon.
  

#### Summary
The assignment here is to take an array of strings, cycle through them and check each string for the following conditions:

1. the string should NOT appear in the array 'alreadyEnrolledDependents'
2. the string SHOULD appear in the array 'ehrAttachedDependents'
3. if there's a corresponding object in the 'dependentEhrInfo' array, the "age" property should be below 18

- strings which pass these conditions are put into the 'verified' array within the AnalyzedDependents instance
- strings which don't get put into the 'unverified' array
- strings which are invalid are placed in neither (if I'm understanding that correctly)

#### Approach

The thing to avoid here is having to iterate through each of the three subarrays for each element in the dependedIds array, because each new array you have to iterate through multiplies the time complexity by the length of that array. For this particular use case, none of the arrays are particularly long, so it wouldn't be that big of a deal, but if you're doing this many times or if any of the arrays get long, then the time and compute power would get out of hand pretty quickly.

Instead, my plan is to create an object for each array with the element as the key and an integer or boolean as the value. Then, for each element in the dependentIds array, it will be a nearly instant lookup for each of the other three arrays, so it will be a max time complexity of n * 3 if I'm doing my math right. This is probably a little bit overengineering for this use case but I think it's the right thing to do in the long run.

In ruby, there's a method called "each_with_object" which is an array method that returns a ruby hash (js object). I couldn't find an analogue in typescript in the limited amount of time I gave myself for this challenge (to simulate the live-coding experience), but given more time I'm positive there's alternative out there somewhere. In the meantime I'm declaring separate objects. It's the same space complexity but a little longer to read.

Another important note: in the real world, I would set up a series of tests to ensure that the information is being processed as it should. There's also some refactoring that could be done, I put everything inside the exported function so that it's all in one place for you to read. 


#### Notes
Learning regex in a new language can be daunting, but I've been working on a project recently which utilizes regex pretty heavily and I feel very comfortable using regex in ruby. The regex that I wrote for ensuring that the string is a string of digits is in ruby and I'm 99% sure it would work - basically a negative lookahead to find non-digit characters, with a matcher for at least 1 digit character. From what I can tell js/ts regex is very similar, but it might not be exactly the same.

If you had been live coding this with me, you would have seen me get hung up because the results weren't what I expected; after a period of debugging I found that I had an exclamation point in the wrong place. 
