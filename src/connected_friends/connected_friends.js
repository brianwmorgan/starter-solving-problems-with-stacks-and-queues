const Queue = require("../lib/queue");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PSEUDOCODE //

// (1.) If 'graph' is empty (has no keys), return 'false'.
// (2.) If 'startUser' is equal to 'endUser', return 'true'.
// (3.) Initialize a new array, 'enqueued', that contains 'startUser'.
// (4.) Initialize a new empty queue named 'discovered'.
// (5.) Enqueue 'startUser'.
// (6.) While 'discovered' is not empty, do the following:
// (6A.) Dequeue a value from 'discovered' and name it 'user'.
// (6B.) For each friend 'followedUser' 'in graph[user]', do the following:
//       i. If 'followedUser' is equal to 'endUser', return 'true'.
//       ii. If 'enqueued' does not include 'followedUser', do the following:
//              a. Add 'followedUser' to 'enqueued'.
//              b. Enqueue 'followedUser' to 'discovered'.
// (7.) Return 'false'.

// In this algorithm, the 'enqueued' array is used to make the algorithm more efficient by making
// sure that any given user is explored only once. If a similar problem comes up, you can adapt this
// algorithm to track information other than 'enqueued'. For example, you might track the number
// of nodes between two users, or track which user is following the most people.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JAVASCRIPT IMPLEMENTATION //

const connected = (graph, startUser, endUser) => {
  const users = Object.keys(graph);

  // (1.)
  if (users.length === 0) {
    return false;
  }

  // (2.)
  if (startUser === endUser) {
    return true;
  }

  // (3.)
  const enqueued = [startUser];

  // (4.)
  const discovered = new Queue();

  // (5.)
  discovered.enqueue(startUser);
  
  // (6.)
  while (discovered.first) {
    // (6A.)
    const user = discovered.dequeue();

    const following = graph[user];

    // (6B.)
    for (const followedUser of following) {
      // (6Bi.)
      if (followedUser === endUser) {
        return true;
      }
      // (6Bii.)
      if (!enqueued.includes(followedUser)) {
        // (6Biia.)
        enqueued.push(followedUser);
        // (6Biib.)
        discovered.enqueue(followedUser);
      }
    }
  }

  // (7.)
  return false;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXPORT //

module.exports = connected;
