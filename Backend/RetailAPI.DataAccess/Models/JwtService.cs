using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.Models
{
    public class JwtService
    {
        private string secureKey = "JWT:Secret";

        public string Generate(int id)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.EcdsaSha256Signature);
            var header = new JwtHeader(credentials);
            var payload = new JwtPayload(issuer: id.ToString(), audience: null, claims: null, notBefore: null, expires: DateTime.Now.AddHours(3));
            var securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }

        public JwtSecurityToken Verify(string jwt)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secureKey);
            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true, 
                ValidateIssuer =false,
                ValidateAudience = false

            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;

        }
    }
}
