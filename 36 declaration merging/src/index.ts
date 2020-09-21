// Express Base
export interface Request {
  body: any;
}

// Express JSON
export interface Request {
  json: any;
}

// Our App
function handleRequest(req: Request) {
  req.body;
  req.json;
}