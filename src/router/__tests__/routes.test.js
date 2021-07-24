const app = require("../../configs/app.configs");
const request = require("supertest");

describe("app integration", () => {
  it("should be defined", (done) => {
    expect(app).toBeDefined();
    done();
  });

  let server;

  beforeAll(async () => {
    server = await app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("routes", () => {
    it("should be mounted", async () => {
      await request(server).get("/api").expect(200);
    });
  });
});
