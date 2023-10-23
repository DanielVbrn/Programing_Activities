using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Venda.Models
{
    public class Seller
    {
        public int Id { get; set;}
        public string? Name { get; set;}
        public string? Email { get; set;}
        public string? BirthDate { get; set;}
        public double BaseSalary { get; set;}
    }
}