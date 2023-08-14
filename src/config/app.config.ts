interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Inventory Manager', 'Purchasing Agent', 'Accountant'],
  tenantName: 'Organization',
  applicationName: 'SAMRAHI',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
