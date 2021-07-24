const app = require("../../configs/app.configs");
const request = require("supertest");

describe("app integration", () => {
  it("should be defined", () => {
    expect(app).toBeDefined();
  });

  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll(() => {
    server.close();
  });

  describe("routes", () => {
    it("should be mounted", async () => {
      await request(server).get("/api").expect(200);
    });
  });
});
