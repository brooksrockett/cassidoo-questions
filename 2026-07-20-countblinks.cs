using System.Text.RegularExpressions;

static int countBlinks(string input)
{
    var matches = Regex.Matches(input, "_.*?_");
    if (matches.Count > 0)
    {
        return matches.OrderByDescending(i => i.Length).First().Length - 2;
    }
    return 0;
}

var inputs = new List<string>
{
    "_..._",
    "_._.._...._",
    "....._",
    "._._.."
};
System.Console.WriteLine(countBlinks(inputs[0]));
System.Console.WriteLine(countBlinks(inputs[1]));
System.Console.WriteLine(countBlinks(inputs[2]));
System.Console.WriteLine(countBlinks(inputs[3]));