module.exports = async (err, req, res, next) => {
   try {
     const {status} = err;
     const {code} = err;
     const {message} = err;
    if (res.headersSent) {
        return next(err)
      }    
      res.status((status || 500)).send({message , code})
   } catch (error) {
      res.status(500).send({message: "API Not able to process request"})
   }
}