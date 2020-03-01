
public class ValleySolution {
    static int countingValleys(String s) {

        int valleyCounter = 0;
        int altitude = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'U') {
                if (altitude == -1) {
                    valleyCounter++;
                }
                altitude++;
            } else {
                altitude--;
            }

        }
        return valleyCounter;
    }

    public static void main(String[] args) {
        System.out.println(countingValleys("DDUUUUDDDDUUDDUUDDUU"));
    }
}