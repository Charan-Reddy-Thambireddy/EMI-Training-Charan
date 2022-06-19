﻿using ManagementSystem.DataModel.Entities;
using ManagementSystemAPI.Services.Interface;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ManagementSystemAPI.Services
{
    public class TokenService : ITokenService
    {
        private readonly SymmetricSecurityKey _symmetricSecurityKey;
        public TokenService(IConfiguration configuration)
        {
            _symmetricSecurityKey= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["TokenKey"]));
        }
        public string CreateToken(Employee employee)
        {
            var claim = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Sub,employee.EmployeeName.ToString(CultureInfo.InvariantCulture)),
                new Claim("EmployeeId",employee.EmployeeId.ToString(CultureInfo.InvariantCulture)), 
                new Claim(ClaimTypes.Role,employee.DesignationId.ToString()),
                 new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };
            var credentials = new SigningCredentials(_symmetricSecurityKey,SecurityAlgorithms.HmacSha256);
            var tokenDeceptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claim),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDeceptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
