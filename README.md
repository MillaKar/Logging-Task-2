# Tally Counter REST API  

## Description  

This project implements a simple Tally Counter REST API using Node.js (18), Express (4.18.2), and Winston (3.11.0).  

The application provides REST endpoints to:  

- Increase the counter  
- Read the current counter value  
- Reset the counter to zero  

The counter state is stored in-memory and resets when the server restarts.  

---

## How to Run  

### 1. Install dependencies  

```
npm install
```

### 2. Start the server  

```
node src/main.js
```

The server will start on:  

```
http://localhost:3000
```

---

## Available Endpoints  

### Increase Counter  

```
GET /counter-increase  
```

Increases the counter by one and returns the updated value.  

---

### Read Counter  

```
GET /counter-read  
``` 

Returns the current counter value.  

---

### Reset Counter  

```
GET /counter-reset  
```

Resets the counter to zero and returns the updated value.  

---

## Output  

### Example JSON Response  

```
{
  "counter": 1  
}
```

---

## Logging  

Logging is implemented using Winston.  

Log format examples:  

### Main logs  

```
[MAIN] Starting  
[MAIN] Stopping  
``` 

### Endpoint logs  

```
[ENDPOINT] GET '/counter-increase'  
```

### Counter logs  

```
[COUNTER] read 0  
[COUNTER] increase 1  
[COUNTER] zeroed 0  
```
---
