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
// MENU ROUTES
//=====================================================================

export function getDashboardRoute() {
  return "/dashboard";
}

export function getAccountsRoute() {
  return "/accounts";
}

// ====================================================================
// LEADS ROUTES
//=====================================================================

export function getContactsRoute() {
  return "/contacts";
}

export function getLeadsRoute() {
  return "/leads";
}

export function getCalendarRoute() {
  return "/calendar";
}

// ====================================================================
// Cases ROUTES
//=====================================================================

export function getCasesRoute() {
  return "/cases";
}

export function getActivitiesRoute() {
  return "/activities";
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
