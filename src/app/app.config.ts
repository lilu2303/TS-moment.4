import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoursesService } from './services/courses.service';
import { CoursesDataSource } from './services/courses.dataSource';
import { MatSortModule } from '@angular/material/sort';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimationsAsync(), CoursesService, CoursesDataSource, MatSortModule]
};
