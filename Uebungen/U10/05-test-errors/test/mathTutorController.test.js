const { expect } = require("chai");
const proxyquire = require("proxyquire");


class NedbDouble {
  constructor(pathOptions) {
    NedbDouble.constructorArgs = { pathOptions };
    NedbDouble.insertCallCount = 0;
    NedbDouble.findOneCallCount = 0;
    NedbDouble.updateCallCount = 0;
  }
  insert(insertDoc, callback) {
    NedbDouble.insertArgs = { insertDoc, callback };
    NedbDouble.insertCallCount += 1;
  }
  findOne(queryObject, callback) {
    NedbDouble.finOneArgs = { queryObject, callback };
    NedbDouble.findOneCallCount += 1;
  }
  update(queryObj, updatesObj, options, callback) {
    NedbDouble.updateArgs = { queryObj, updatesObj, options, callback };
    NedbDouble.updateCallCount += 1;
  }
  find() {
    throw "should not be called in this test";
    //not testing leaderboard
  }
}
NedbDouble["@global"] = true;

const config = require("./config");

const {
  ensureUserIdMiddleware,
} = proxyquire("./mathTutorController", {nedb: NedbDouble});

describe("ensureUserIdMiddleware", function() {
  // beforeEach(function() {
  // });
  it(
    "should create a cookie with the value of a" +
      " db-generated field _id of a newly created user if no cookie is present",
    function() {
      //setup
      const cookieName = config.cookieName;
      const testDbGeneratedUserId = "dbTestID";
      const req = { session: {}, cookies: {} }; //no session.userId, no cookies
      let nextCallCount = 0;
      const nextDouble = () => {
        nextCallCount += 1;
      };
      const appCookie = {};
      const resSetCookieFn = (cName, userId) => (appCookie[cName] = userId);
      const res = { cookie: resSetCookieFn };
      NedbDouble.insertCallCount = 0;

      //exercise 1
      ensureUserIdMiddleware(req, res, nextDouble);

      // tests step 1 (check DB insert called properly)
      expect(NedbDouble.insertCallCount).to.be.equal(1);
      expect(NedbDouble.insertArgs.insertDoc).to.exist;
      const insertedUserDoc = NedbDouble.insertArgs.insertDoc;
      expect(insertedUserDoc).to.not.have.key("_id");
      expect(insertedUserDoc).to.include.key("handle");
      expect(NedbDouble.insertArgs.callback).to.exist;
      expect(nextCallCount).to.equal(0); //nextDouble not yet called

      //exercise 2 (exercise callback)
      NedbDouble.insertArgs.callback(false, {
        ...insertedUserDoc,
        _id: testDbGeneratedUserId
      });
      // tests step 2 (check DB callback processed properly)
      expect(appCookie).to.include.key(cookieName);
      expect(appCookie[cookieName]).to.equal(testDbGeneratedUserId);
      expect(nextCallCount).to.equal(1); //nextDouble now called
    }
  );
});
