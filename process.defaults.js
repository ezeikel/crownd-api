/* global environment variables */

module.exports = {
  APP_SECRET: "MHXoALvMkPk5v2dAVwLBdnmeXioX79OVn6pElXqdld21IIVHA6LSvTzq8oY3tYRMkWBXCEQQCYt84ThFZyxmq7TvstA1Ne0UALU6+EJb6uQh+cUYLhBx3TrgL+gbvO2eNoKCRG832eXKsoYvmZ8nZ9J3xgDbA6QPhZRHOYw0PQ/kMT9xJt5faYiJ0TkuiyQomeuJgPHa70jgIx+e2fFSgbIBCIf3355QMulp9O7Zzt0uUL/eA5Lqv6sU2eNCExvAZPMFup5FLGp9fjM48oXqeJGgLxL7JHytHB/6dIu71WVIi/VeUH4HsUTrh/P2pxm0Y2IgnugTK/KD9/6LL8QAYw==",
  PORT: 7001,
  FRONTEND_URL: process.env.NODE_ENV === "production" ? "https://crownd.app" : "http://localhost:3001",
};
