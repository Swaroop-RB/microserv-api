# Microservices Project

## Description
This project demonstrates a microservices architecture using Node.js and Express.

Services included:
- User Service
- Student Service
- Course Service
- College Service


## How to Run

1. Install dependencies:
npm install

2. Start all services:
npm run start:all


## Services & Ports

| Service | Port |

| User | 3001 |
| Student | 3002 |
| Course | 3003 |
| College | 3004 |


##  APIs

### User Service
GET /users  
POST /users  

### Student Service
GET /students  
POST /students  

### Course Service
GET /courses  
POST /courses  

### College Service
GET /colleges  
POST /colleges  


## Features
- Microservices architecture
- Separate services for each module
- Middleware for logging
- Centralized error handling
- No database (uses arrays)


## Learning Outcome
- Understanding microservices architecture
- Structuring scalable backend projects
- Working with middleware and routing