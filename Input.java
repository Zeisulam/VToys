import java.util.Scanner;

public class Input {
    public static void main(String[] args) {

        int cons = 2;
        int a = 3;
        int b = 4;
        int c = 6;

        System.out.println("a)    a == b = " + (a == b));
        System.out.println("b)    a != b = " + (a != b));
        System.out.println("c)    a > b = " + (a > b));
        System.out.println("d)    a < b = " + (a < b));
        System.out.println("e)    b >= a = " + (b >= a));
        System.out.println("f)    b <= a = " + (b <= a));
        System.out.println("g)    c = a + b = " + (c = a + b));
        System.out.println("h)    c += a = " + (c += b));
        System.out.println("i)    c -= a = " + (c -= a));
        System.out.println("j)    c *= a = " + (c *= a));
        System.out.println("k)    c /= a = " + (c /= a));
        System.out.println("l)    c %= a = " + (c %= a));
        System.out.println("m)    c <<= 2 = " + (c <<= cons));
        System.out.println("n)    c >>= 2 = " + (c >>= cons));
        System.out.println("o)    c &= a = " + (c &= a));
        System.out.println("p)   c ^= a = " + (c ^= a));
        System.out.println("q)    c |= a = " + (c |= a));
    }
}