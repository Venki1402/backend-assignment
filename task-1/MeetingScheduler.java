import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class MeetingScheduler {
    public static List<int[]> optimizeBookings(List<int[]> bookings) {
        if (bookings == null || bookings.isEmpty()) {
            return new ArrayList<>();
        }

        bookings.sort(Comparator.comparingInt(a -> a[0]));

        List<int[]> optimized = new ArrayList<>();
        optimized.add(bookings.get(0));

        for (int i = 1; i < bookings.size(); i++) {
            int[] current = bookings.get(i);
            int[] last = optimized.get(optimized.size() - 1);

            if (current[0] <= last[1]) {
                last[1] = Math.max(last[1], current[1]);
            } else {
                optimized.add(current);
            }
        }

        return optimized;
    }

    public static void printBookings(List<int[]> bookings) {
        System.out.print("[");
        for (int i = 0; i < bookings.size(); i++) {
            int[] booking = bookings.get(i);
            System.out.print(Arrays.toString(booking));
            if (i < bookings.size() - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }

    public static void main(String[] args) {
        // Test case 1
        List<int[]> bookings1 = Arrays.asList(new int[]{9, 12}, new int[]{11, 13}, new int[]{14, 17}, new int[]{16, 18});
        System.out.println("Test case 1");
        System.out.print("Input:  ");
        printBookings(bookings1);
        System.out.print("Output: ");
        printBookings(optimizeBookings(bookings1));
        System.out.println();

        // Test case 2
        List<int[]> bookings2 = Arrays.asList(new int[]{9, 11}, new int[]{13, 15}, new int[]{17, 19});
        System.out.println("Test case 2");
        System.out.print("Input:  ");
        printBookings(bookings2);
        System.out.print("Output: ");
        printBookings(optimizeBookings(bookings2));
        System.out.println();

        // Test case 3
        List<int[]> bookings3 = Arrays.asList(new int[]{9, 11}, new int[]{11, 13}, new int[]{13, 15});
        System.out.println("Test case 3");
        System.out.print("Input:  ");
        printBookings(bookings3);
        System.out.print("Output: ");
        printBookings(optimizeBookings(bookings3));
        System.out.println();

        // Test case 4
        List<int[]> bookings4 = Arrays.asList(new int[]{9, 12}, new int[]{14, 16});
        System.out.println("Test case 4");
        System.out.print("Input:  ");
        printBookings(bookings4);
        System.out.print("Output: ");
        printBookings(optimizeBookings(bookings4));
        System.out.println();

        // Test case 5
        List<int[]> bookings5 = new ArrayList<>();
        System.out.println("Test case 5");
        System.out.print("Input:  ");
        printBookings(bookings5);
        System.out.print("Output: ");
        printBookings(optimizeBookings(bookings5));
    }
}