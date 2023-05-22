const logHeaders = (req, res, next) => {
  res.on("finish", () => {
    console.log("Headers sent:", res.getHeaders());
  });
  next();
};

export default logHeaders
