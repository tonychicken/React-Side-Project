import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';
const authenticateUser_06 = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('authorization', authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
  const token = authHeader.split(' ')[1];
  // console.log('token', token);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    console.log('user', req.user);
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
};
export default authenticateUser_06;