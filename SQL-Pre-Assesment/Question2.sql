select * from Employees where RTRIM(LTRIM(gender)) like '%le' and len(RTRIM(LTRIM(gender)))=4