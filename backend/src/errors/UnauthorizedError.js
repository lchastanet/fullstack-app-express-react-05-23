class UnauthorizedError extends Error {
  constructor(msg = "Unauthorized") {
    super()
    this.msg = msg
    this.status = 401
  }
}

export default UnauthorizedError
