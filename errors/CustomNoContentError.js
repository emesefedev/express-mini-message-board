class CustomNoContentError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = 204
    
    this.name = "NoContentError"
  }
}

module.exports = CustomNoContentError
