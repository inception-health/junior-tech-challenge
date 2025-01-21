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

['101112', '131415', '161718']
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

  ////// BEGIN DYSON'S SOLUTION /////

  const alreadyEnrolledMap: { [id: string]: boolean } = {} // NOT in this one
  const attachedDependentsMap: { [id: string]: boolean } = {} // YES in this one
  const dependentEhrMap: { [id: string]: number } = {} // under 18

  alreadyEnrolledDependents.forEach((dependent) => {
    alreadyEnrolledMap[dependent] = true
  });
  ehrAttachedDependents.forEach((dependent) => {
    attachedDependentsMap[dependent] = true
  });
  dependentEhrInfo.forEach((dependent) => {
    dependentEhrMap[dependent.id] = dependent.age
  });


// kind of hardcoded this, since by the time we're in this function I'm assuming that we've narrowed the user down to this particular user
  analyzedDependents.userId = userId 
  dependentIds.forEach((dependent) => {
    console.log(`${dependent}: ${!alreadyEnrolledMap[dependent]}`)
    if(!((typeof dependent) === 'string') || dependent.length < 1 || !dependent.match(/^(?!.?\D)\d+/)) {
      return;
    } else if(!alreadyEnrolledMap[dependent] && attachedDependentsMap[dependent] && dependentEhrMap[dependent] && dependentEhrMap[dependent] < 18) {
      analyzedDependents.verified.push(dependent);
    } else {
      analyzedDependents.unverified.push(dependent);
    }
  });

  return analyzedDependents;
};

