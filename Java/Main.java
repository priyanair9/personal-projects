public class Main {
    public static void main(String[] args) {
        int result = count9(95991299);
        System.out.println(result);
    }

    // method to count how many 9s are in a number
    public static int count9(int n) {
        int count = 0;
        if(n < 9) {
            return count;
        }
        if(n%10 == 9 || n == 9) {
            count++;
        }
        return count + count9(n/10);
    }
}