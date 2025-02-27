const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const initDatabase = require("./config/init-db");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middleware/errorHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");
const authRoutes = require('./routes/auth.routes');

// Initialize express
const app = express();

// Middleware
app.use(
  cors({
    origin: config.api.corsOrigin,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the REST API",
    environment: config.server.nodeEnv,
    version: "1.0.0",
    docs: "/api-docs",
  });
});

// API routes
app.use(config.api.prefix, authRoutes);
app.use(config.api.prefix, userRoutes);

// Error handling middleware
app.use(errorHandler);

// Initialize database and start server
const PORT = config.server.port;

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT} in ${config.server.nodeEnv} mode`
    );
    console.log(
      `API Documentation available at http://localhost:${PORT}/api-docs`
    );
  });
});
