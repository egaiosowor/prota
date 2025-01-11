//=====================================================================
// AUTH ROUTES
//=====================================================================

export function getLoginRoute() {
  return "/login";
}

export function getSignupRoute() {
  return "/signup";
}

// ====================================================================
// DASHBOARD ROUTES
//=====================================================================

export function getDashboardRoute() {
  return "/dashboard";
}

// ====================================================================
// USER ROUTES
//=====================================================================

export function getUsersRoute() {
  return "/users";
}

export function getUserRoute(userId: string) {
  return `/users/${userId}`;
}

export function getEditUserRoute(data?: { userId: string }) {
  return `/users/${data?.userId}`;
}

// ====================================================================
// PROFILE ROUTES
//=====================================================================

export function getProfileRoute() {
  return "/dashboard/profile";
}
