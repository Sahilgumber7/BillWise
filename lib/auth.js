export const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("store_id")
  window.location.href = "/login"
}

export const isAuthenticated = () => {
  return typeof window !== "undefined" && !!localStorage.getItem("token")
}
