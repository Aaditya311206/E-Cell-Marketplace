const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  // 1. Get the token from the request headers
  const tokenHeader = req.header('Authorization');

  if (!tokenHeader) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // 2. The token usually comes as "Bearer <token>", so we split it to get just the token
    const tokenString = tokenHeader.split(' ')[1];
    
    // 3. Verify the token using our secret key
    const decoded = jwt.verify(tokenString, process.env.JWT_SECRET || 'fallback_secret_please_change_in_env');
    
    // 4. Attach the decoded user payload to the request object
    // This allows Niyati's business logic to know WHO is making the request
    req.user = decoded;
    
    // 5. Move to the next middleware or controller (e.g., Niyati's APIs)
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
