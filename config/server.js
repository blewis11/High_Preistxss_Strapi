module.exports = ({ env }) => ({
  ssl: {
    disabled: false,
    trustProxy: false
  },
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://www.thehighpriestxss.com/api",
  admin: {
    url: "https://www.thehighpriestxss.com/dashboard",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "a8428198c9725e1ab4c290dd8da1fdde")
    }
  }
});
