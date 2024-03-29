import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
   
    this.courseService.getCourses().subscribe(
      courses => this.courses = courses 
    );
  }

  deleteOnCourse(course: Course): void {
        course.active =  course.active? false:true
        console.log(course.active)
      this.courseService.deleteOnCourse(course).subscribe();
  }



}
