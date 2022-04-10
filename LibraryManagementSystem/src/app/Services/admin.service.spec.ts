import { TestBed } from '@angular/core/testing';
import { Book } from '../Models/book';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService, httptestingcontroller:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [AdminService]
    });
    service = TestBed.get(AdminService);
    httptestingcontroller=TestBed.get(HttpTestingController);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Should get All data', () => {
   service.getAllBooks().subscribe((books)=>{
     expect(books).toBeTruthy();
   })
   const req =httptestingcontroller.expectOne('http://localhost:3000/Books');
    expect(req.request.method).toEqual("GET");
    req.flush(Book);
  });

  
});
