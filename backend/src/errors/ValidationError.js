class ValidationError extends Error {
  constructor(msg = "Unauthorized") {
    super()
    this.msg = msg
    this.status = 422
  }
}

export default ValidationError
