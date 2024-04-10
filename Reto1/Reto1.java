import java.util.Scanner;

public class Reto1 {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            String cadena = sc.nextLine();
            
            String subString ="";

            String cadenaTemp = cadena.charAt(0)+"";

            for (int i = 1; i < cadena.length(); i++) {
                if(cadenaTemp.indexOf(cadena.charAt(i)) != -1){
                    if(cadenaTemp.length() > subString.length()){
                        subString = cadenaTemp;
                    }
                    cadenaTemp = cadena.charAt(i)+"";
                } else {
                    cadenaTemp += cadena.charAt(i);
                }
            } 
            System.out.println(subString);
        }
    }
}