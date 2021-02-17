using System.Collections.Generic;

namespace Database
{
    public static class InMemory
    {
        public static List<Student> Students = new List<Student> {
            new Student { 
                FullName = "Alfreds Futterkiste", 
                Id =  91019324, 
                Email =  "Alfreds.Futterkiste@oit.edu" 
                },
            new Student { 
                FullName =  "Maria Moctezuma", 
                Id =  91123024, 
                Email =  "Maria.Moctezuma@oit.edu" 
                },
            new Student { 
                FullName =  "Ernst Handel", 
                Id =  91012324, 
                Email =  "Ernst.Handel@oit.edu" 
                },
            new Student { 
                FullName =  "Helen Bennett", 
                Id =  91812324, 
                Email =  "Helen.Bennett@oit.edu" 
                },
        };

        public static List<Instructor> Instructors = new List<Instructor> {
            new Instructor  { 
                FirstName =  "Alfreds", 
                MiddleName =  "Anders", 
                LastName =  "Futterkiste" },
            new Instructor  { 
                FirstName =  "Maria", 
                MiddleName =  "Francisco", 
                LastName =  "Moctezuma" },
            new Instructor  { 
                FirstName =  "Ernst", 
                MiddleName =  "Roland", 
                LastName =  "Handel" },
            new Instructor  { 
                FirstName =  "Helen", 
                MiddleName =  "Heather", 
                LastName =  "Bennett" },   
        };
    }
}