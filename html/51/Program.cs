using System.Drawing;

namespace shirt {
    internal class Program {
        static void Main(string[] args) {
            string[] myColors = new string[] { "blue", "green ", "yellow" };
            string[] myPatterns = new string[] { "striped", "Checkered", "Poca-Dots" };
            foreach (string myColor in myColors) {
                foreach (string mypattern in myPatterns) {
                    Shirt myShirt = new Shirt(myColor,mypattern);
                    Console.WriteLine($"{myShirt.pattern}:{ myShirt.color}");
                }
            }
        }
    }
    internal class Shirt {
        public string color;
        public string pattern;
        public Shirt(string color,string pattern) {
            this.color = color;
            this.pattern = pattern;
        }
    }
}