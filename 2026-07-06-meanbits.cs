static double meanBits(int x)
{
    double nums = 0;
    double sum = 0;
    for (var i = 0; i < x; i++)
    {
        sum += Convert.ToString(i, 2).Length;
        nums++;
    }
    return Math.Round(sum / nums, 2);
}

System.Console.WriteLine($"{meanBits(6)}");
System.Console.WriteLine($"{meanBits(32)}");
