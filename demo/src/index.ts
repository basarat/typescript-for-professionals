/** Not clear in its intent */
function bad(excludeNullables: {}) { } 

bad(null); // ❌ not allowed
bad(undefined); // ❌ not allowed
bad('anything else'); // ✅ allowed
bad(1337); // ✅ allowed

/** Clear in its intent */
function good(excludeNullables: NonNullable<unknown>) { }

good(null); // ❌ not allowed
good(undefined); // ❌ not allowed
good('anything else'); // ✅ allowed
good(1337); // ✅ allowed
