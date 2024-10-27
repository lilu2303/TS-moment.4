import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Injectable, ViewChild } from "@angular/core";
import { CoursesService } from "./courses.service";
import { Course } from "../model/course";
import { BehaviorSubject, Observable } from "rxjs";
import { MatSort, Sort } from "@angular/material/sort";

@Injectable()
export class CoursesDataSource extends DataSource<Course> {
    courses$ = new BehaviorSubject<Course[]>([]);
    isLoading$ = new BehaviorSubject<boolean>(false);

    @ViewChild(MatSort, { static: false }) sort!: MatSort;
    constructor(private courseService: CoursesService) {
        super();
    }
    connect(): Observable<Course[]> {
        return this.courses$.asObservable();
    }

    disconnect(): void {
        this.courses$.complete();
    }

    loadCourses(): void {
        this.isLoading$.next(true);
        this.courseService.getCourses().subscribe((courses) => {
            this.courses$.next(courses);
            this.isLoading$.next(false);

        })
    }
}