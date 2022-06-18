import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Login } from '../Models/login';

describe('AuthService', () => {
  let service: AuthService,httptestingcontroller:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
imports:[
  HttpClientTestingModule
],providers:[
  AuthService
]
    });
    service = TestBed.get(AuthService);
    httptestingcontroller=TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Should get credentials',()=>{
    let baseUrl='http://localhost:3000/UserCreds?userName=Admin&password=qwerty';
   
    let credentials:Login = new Login();
    credentials.userName='Admin';
    credentials.password='qwerty';
    credentials.id=1001;
    credentials.role=1
    service.getUserdetails(credentials).subscribe(cred =>{
      expect(cred).toBeTruthy();
      expect(cred.role).toEqual(1);
      expect(cred.id).toEqual(1001);
      debugger;
    });
    const req =httptestingcontroller.expectOne(baseUrl);
    debugger
    expect(req.request.method).toEqual("GET");
    req.flush(credentials);
  });
});
