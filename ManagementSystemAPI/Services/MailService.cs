using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services
{
    public class MailService
    {
        public async Task smtpMailer(string toMailID,int status,int requestId)
        {
            var subject = "";
            if (status==1)
            {
                subject = "A request is been raised to you.";
            }
            else if(status==2)
            {
                subject = "Your Request is Approved";
            }
            else if(status==3)
            {
                subject = "Your Request is Rejected";
            }
            
            var content = "Follow this link: "+" http://localhost:4200/apms/details-request/"+requestId;
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient();
                message.From = new MailAddress("cherrylucky1997@gmail.com");
                message.To.Add(new MailAddress("charanreddy2806@gmail.com"));
                message.Subject = subject;
                message.IsBodyHtml = false; //to make message body as html
                message.Body = content;
                smtp.Port = 587;
                smtp.UseDefaultCredentials = true;
                smtp.Host = "smtp.gmail.com"; //for gmail host
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("cherrylucky1997@gmail.com", "osmdifocpcuqwqco");
                //smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(message);
            }
            catch (Exception ex)
            {

            }
        }
    }
}
