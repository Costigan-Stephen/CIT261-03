String pass;
String user;
user = txtUser.getText();
pass = txtPass.getText();

if(pass.equals("Winter2018") && user.equals("cit261user") ){
    lblDisplay.setText("Credentials Accepted.");
}
else{
    lblDisplay.setText("Please try again.");
}  

import java.util.Scanner;

public class Login {
public void run() {
    Scanner scan = new Scanner (new File("the\\dir\\ProfileList.html"));
    Scanner keyboard = new Scanner (System.in);
    String user = scan.nextLine();
    String pass = scan.nextLine(); 

    String inpUser = keyboard.nextLine();
    String inpPass = keyboard.nextLine();

    if (inpUser.equals(user) && inpPass.equals(pass)) {
        System.out.print("Credentials Accepted");
    } else {
        System.out.print("Please try again.");
    }
}
} 

