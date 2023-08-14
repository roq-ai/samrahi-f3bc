const mapping: Record<string, string> = {
  organizations: 'organization',
  products: 'product',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
