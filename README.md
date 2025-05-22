npm init -y
npm install express mongoose dotenv morgan helmet
npm install mongodb

curl -X POST "http://localhost:3000/login" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin123; DROP TABLE users:\"}"

curl -X POST "http://localhost:3000/login" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin123\"}"

curl -X POST "http://localhost:3000/login" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"1234\"}"
