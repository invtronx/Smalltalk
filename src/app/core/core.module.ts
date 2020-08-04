import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { httpInterceptorProviders } from './interceptors';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { ChunkDetailResolverService } from './services/chunk-detail-resolver.service';
import { ComposureResolverService } from './services/composure-resolver.service';
import { UsersListResolveService } from './services/users-list-resolver.service';
import { UserDetailResolverService } from './services/user-detail-resolver.service';
import { FetchCurrentUserService } from './services/fetch-current-user.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    httpInterceptorProviders,
    ApiService,
    AuthService,
    JwtService,
    ChunkDetailResolverService,
    ComposureResolverService,
    UsersListResolveService,
    UserDetailResolverService,
    FetchCurrentUserService,
  ],
})
export class CoreModule {}
