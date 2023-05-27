function errorHandler(error, req, res, next) {
  if (error.message === 'bad request') {
    res.status(400).json({ error: 'Bad Request' });
  } else if (error.message === 'wrong credentials') {
    res.status(401).json({ error: 'Wrong Credentials' });
  } else if (error.message === 'unauthorized') {
    res.status(403).json({ error: 'Unauthorized' });
  } else if (error.message == 'not found') {
    res.status(404).json({ error: 'Not Found' });
  } else {
    next(error);
  }
}
export default errorHandler;
