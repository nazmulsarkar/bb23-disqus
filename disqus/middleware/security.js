export default ({ store, route, redirect }) => {
  // Check if user is connected first
  if (!store.state.auth.loggedIn) {
    return redirect('/login')
  }

  // Get authorizations for matched routes (with children routes too)
  const authorizationLevels = route.meta.map((meta) => {
    if (meta.auth && typeof meta.auth.authority !== 'undefined') {
      return meta.auth.authority
    }
    return 0
  })
  // Get highest authorization level
  const highestAuthority = Math.max.apply(null, authorizationLevels)

  if (
    store.state.auth.user.role &&
    store.state.auth.user.role.level < highestAuthority
  ) {
    // return error({
    //   statusCode: 401,
    //   message: 'You must be an admin to visit this page.'
    // })
    return redirect('/subscribe')
  }
  return redirect('/subscribe')
}
