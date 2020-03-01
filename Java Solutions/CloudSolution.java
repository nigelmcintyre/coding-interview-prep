import java.io.IOException;

public class CloudSolution {
    static int jumpingOnClouds(int[] c) {

        int num_jumps = 0;
        int i = 0;

        while (i < c.length - 1) {
            if (i + 2 == c.length || c[i + 2] == 1) {
                num_jumps++;
                i++;
            } else {
                i += 2;
                num_jumps++;

            }
        }
        return num_jumps;
    }

    public static void main(String[] args) throws IOException {
        int[] arr = { 0, 1, 0, 0, 0, 1, 0 };
        System.out.println(jumpingOnClouds(arr));
    }
}