# Meeting Scheduler

This Java program optimizes a list of meeting bookings by merging overlapping time slots.

## Problem Description

Given a list of meeting bookings, where each booking is represented by a start time and an end time, the program merges overlapping time slots to produce an optimized list of bookings.

## Solution

The `MeetingScheduler` class provides the following functionality:

1. `optimizeBookings(List<int[]> bookings)`: This method takes a list of bookings and returns an optimized list with merged overlapping time slots.
2. `printBookings(List<int[]> bookings)`: This method prints the list of bookings in a readable format.

## Algorithm

The optimization algorithm works as follows:

1. Sort the input bookings based on their start times.
2. Iterate through the sorted bookings:
   - If the current booking overlaps with the previous one, merge them by updating the end time of the previous booking.
   - If there's no overlap, add the current booking to the optimized list.

## Usage

To use the `MeetingScheduler`:

1. Create a `List<int[]>` representing your bookings, where each `int[]` contains two elements: start time and end time.
2. Call the `optimizeBookings` method with your list of bookings.
3. The method will return an optimized list of bookings.

Example:

```java
List<int[]> bookings = Arrays.asList(new int[]{9, 12}, new int[]{11, 13}, new int[]{14, 17}, new int[]{16, 18});
List<int[]> optimizedBookings = MeetingScheduler.optimizeBookings(bookings);
MeetingScheduler.printBookings(optimizedBookings);
```

## Test Cases

The `main` method includes several test cases to demonstrate the functionality of the `MeetingScheduler`:

1. Overlapping meetings
2. Non-overlapping meetings
3. Consecutive meetings
4. Meetings with a gap
5. Empty list of meetings

Run the `main` method to see the results of these test cases.

## Time Complexity

The time complexity of the `optimizeBookings` method is O(n log n), where n is the number of bookings. This is due to the initial sorting of the bookings. The subsequent merging operation is O(n).

## Space Complexity

The space complexity is O(n) in the worst case, where n is the number of bookings. This occurs when there are no overlapping meetings, and the optimized list is the same size as the input list.
