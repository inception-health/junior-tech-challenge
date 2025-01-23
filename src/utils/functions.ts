/* 
  Imagine that you are working on a product that allows users to get virtual care for themselves and their dependents.
  The user can subscribe to a plan and then they can add their dependents to their account. 
  However, not all dependents can be added to the account.

  These are the rules for adding dependents:
  - Valid dependent IDs can only be the strings of numbers.
  - User can only add dependents that are not yet enrolled in the system.
  - User can only add dependents that are attached to them in EHR (Electronic Health Records) system.
  - User can only add dependents that are not 18 years old yet.

  Sort each dependent into one of the following categories: verified or unverified based on the rules above. Incorrect dependentIDs do not need to be returned back.
  analyzedDependents variable is the variable that holds your result.
*/

// here is some data that you have from DB:

// the list of dependents that are already enrolled
const alreadyEnrolledDependents: string[] = ['123', '456', '789'];

// the list of dependents that user has attached in EHR
const ehrAttachedDependents = ['456', '123', '101112', '789', '131415', '161718'];

// information on each dependent that user has in EHR
const dependentEhrInfo = [
  { id: "456", name: "Joseph", "age": 17, relation: "son" },
  { id: "123", name: "Jane", "age": 18, relation: "daughter" },
  { id: "101112", name: "John", "age": 5, relation: "son" },
  { id: "789", name: "Jill", "age": 22, relation: "daughter" },
  { id: "131415", name: "Jack", "age": 1, relation: "son" },
  { id: "161718", name: "Jenny", "age": 3, relation: "daughter" },
];

// returned value type
type AnalyzedDependents = {
  userId: string;
  verified: string[];
  unverified: string[];
}

export const verifyDependents = (
): AnalyzedDependents => {
  // In a real-world scenario, the function would take in userId and dependentIds as arguments. However, for this task, we will hardcode the values.
  // userId is ther ID for the main user (subscriber)
  const userId: string = 'user123';
  // dependentIds is an array of dependent IDs that the user is trying to add
  const dependentIds: string[] = ['123', '2367', '99087', '456', '789', '101112', '131415', '001298', 'ihy789', '161718', ''];

  const analyzedDependents: AnalyzedDependents = {
    userId: '', 
    verified: [],
    unverified: [],
  }

  dependentIds.forEach((dependent) => {
    if(ehrAttachedDependents.includes(dependent) && !alreadyEnrolledDependents.includes(dependent)) {

    }
  })
  
  return analyzedDependents;
};