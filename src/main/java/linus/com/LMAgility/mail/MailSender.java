package linus.com.LMAgility.mail;

import linus.com.LMAgility.model.Activity;
import linus.com.LMAgility.model.Student;
import linus.com.LMAgility.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Properties;


public class MailSender{

    public void sendActivityMail(Activity activity, List<Student> students) {
        Session session = getSession();
        String activityInfo = activity.emailFormatter();
        List<Student> studentList = students;
        System.out.println(studentList.size());
        for (int i= 0; i<studentList.size(); i++) {
            if (studentList.get(i).isWantEmail()) {
                try {
                    Message message = new MimeMessage(session);
                    message.setFrom(new InternetAddress(username));
                    message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(studentList.get(i).getEmail()));
                    message.setSubject("Nytt träningstillfälle på LM-Hundsport!");
                    message.setText("Kära " + studentList.get(i).getForName() + " och " + studentList.get(i).getDogName() + "!\n Nu finns det ett nytt träningstillfälle på hemsidan! \n"
                            + activityInfo);
                    Transport.send(message);

                    System.out.println("Email sent to : " + studentList.get(i).getForName() + " at email " + studentList.get(i).getEmail());

                } catch (MessagingException e) {
                    e.printStackTrace();
                }
            }
            else {
                System.out.println( studentList.get(i).getForName() +" " +studentList.get(i).getSurName() +" don't wan't emails");
            }
        }
    }
    public void sendConfirmationEmail(Student student){
        if (student.isWantEmail()) {
            Session session = getSession();
            try {
                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress(username));
                message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(student.getEmail()));
                message.setSubject("Bekräftelse mail på LM-Hundsport");
                message.setText("Tack för din registrering " + student.getForName() + " " + student.getSurName());
                Transport.send(message);
                System.out.println("Email sent to : " + student.getEmail());

            } catch (MessagingException e) {
                e.printStackTrace();
            }
        }
        else {
            System.out.println(student.getForName() + " don´t wan't emails");
        }
    }
    public Properties getProps(){
        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "465");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.socketFactory.port", "465");
        prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        return prop;
    }
    public Session getSession(){
        Session session = Session.getInstance(getProps(),
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });
        return session;
    }
}
