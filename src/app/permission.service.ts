import { Injectable } from '@angular/core';
import { Utility } from './common/Utility';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  hasPermission(entity: string, action: string): boolean {
    const rolePermissions = Utility.applicationConfig.permissions[Utility.userDetails.jobTitle];
    if (rolePermissions && rolePermissions[entity]) {
      return rolePermissions[entity].includes(action);
    }
    return false;
  }
}
