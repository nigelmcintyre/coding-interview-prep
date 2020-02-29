import java.io.IOException;

public class Solution {
    // Find the diagonal difference of two 2D arrays
    static int diagonalDifference(int[][] arr) {

        int left_to_right = 0;
        int right_to_left = 0;
        // Get number of rows and columns
        int rows = arr.length;
        int columns = arr[0].length;
        // 2D array traversal counters
        int i = 0;
        int j = 0;
        int k = 0;
        int l = arr[0].length - 1;
        // Start at position (1,1) and (1,3), traverse and sum.
        while (i < rows && j < columns && k < rows && l >= 0) {
            left_to_right += arr[i][j];
            right_to_left += arr[k][l];

            i++;
            j++;
            k++;
            l--;
        }
        return Math.abs(left_to_right - right_to_left);

    }

    public static void main(String[] args) throws IOException {
        int[][] arr = { { 11, 2, 4 }, { 4, 5, 6 }, { 10, 8, -12 } };
        System.out.println(diagonalDifference(arr));
    }
}