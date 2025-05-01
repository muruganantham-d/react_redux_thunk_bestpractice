# Backage Installed
1. npm init -y
2. npm install express mongoose cors dotenv
3. npm install --save-dev typescript ts-node nodemon @types/express @types/node @types/cors

# Folder Structre 2025
root/
├── node_modules/
├── src/
│   ├── config/           # (DB config, environment config)
│   │    └── database.ts
│   ├── controllers/      # (Request handlers)
│   │    └── userController.ts
│   ├── models/           # (Mongoose models / TypeScript interfaces)
│   │    └── userModel.ts
│   ├── routes/           # (Route definitions)
│   │    └── userRoutes.ts
│   ├── middlewares/      # (Auth, error handling middleware)
│   │    └── authMiddleware.ts
│   ├── services/         # (Business logic, services)
│   │    └── userService.ts
│   ├── utils/            # (Helper functions)
│   │    └── logger.ts
│   ├── app.ts            # (Express app setup)
│   └── server.ts         # (Main entry point - connects DB and runs server)
├── package.json
├── tsconfig.json
├── .env                  # (Environment variables)
├── .gitignore
└── README.md




