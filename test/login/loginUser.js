const zest = require('zest');
// Test - Valid Login
zest.describe("User Login", function () {
    zest.it("Valid Login: Login with correct username and password", async function () {
        const response = await zest.post('https://fakestoreapi.com/auth/login', {
            username: "validUsername",
            password: "validPassword"
        });
        zest.expect(response.status).toBe(200);
        zest.expect(response.body).toHaveProperty('token');
    });
    // Test - Invalid Login
    zest.it("Invalid Login: Incorrect username or password", async function () {
        const response = await zest.post('https://fakestoreapi.com/auth/login', {
            username: "invalidUsername",
            password: "wrongPassword"
        });
        zest.expect(response.status).toBe(401);
        zest.expect(response.body).toHaveProperty('error', 'Invalid credentials');
    });
    // Test - Invalid Login
    zest.it("Empty Username", async function () {
        const response = await zest.post('https://fakestoreapi.com/auth/login', {
            username: "",
            password: "validPassword"
        });
        zest.expect(response.status).toBe(400);
        zest.expect(response.body).toHaveProperty('error', 'Username is required');
    });
});
