import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class SockSolution {
    static int numPairs(int[] arr) {
        int pairCount = 0;
        if (arr.length == 0)
            return pairCount;

        // Set<Integer> set = new HashSet();
        // for (int i = 0; i < arr.length; i++) {
        // if (!set.contains(arr[i])) {
        // set.add(arr[i]);
        // } else {
        // pairCount++;
        // set.remove(arr[i]);
        // }
        // }
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < arr.length; i++) {
            if (map.containsKey(arr[i])) {
                map.put(arr[i], map.get(arr[i]) + 1);
            } else {
                map.put(arr[i], 1);
            }
        }
        Integer[] nonSingles = (Integer[]) (map.values().toArray(new Integer[map.values().size()]));
        int pairs[];
        for (int i = 0; i < nonSingles.length; i++) {

            if (nonSingles[i] == 2) {
                pairCount++;
            } else if (nonSingles[i] >= 2) {
                pairCount += Math.floor(nonSingles[i] / 2);
            }

        }

        return pairCount;

    }

    public static void main(String[] args) {
        int arr[] = { 10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 10, 10, 20, 10 };
        System.out.println(numPairs(arr));
    }
}
