using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectA.Models
{
    public class Turma
    {
        public int Id { get; set;}
        public string Sigla {get; set;}
        public int Ano{get; set;}
        public virtual ICollection<Aluno> Alunos {get;set;}
        public virtual ICollection<Professor> Professores {get;set;}
    }
}