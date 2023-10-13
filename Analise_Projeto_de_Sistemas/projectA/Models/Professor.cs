using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectA.Models
{
    public class Professor: Pessoa
    {   
        public string siap {get; set;}
        public string? Formacao { get; set;}
        public double Salario { get; set;}

        public virtual ICollection<Turma>? ProfessorTurmas { get; set;}
    }
}