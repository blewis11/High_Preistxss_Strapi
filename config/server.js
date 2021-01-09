module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "http://46.101.9.88/api",
  admin: {
    url: "http://46.101.9.88/dashboard",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "a8428198c9725e1ab4c290dd8da1fdde")
    }
  }
});
