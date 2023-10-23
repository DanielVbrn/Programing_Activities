using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Venda.Models
{
    public class SalesRecord
    {
        public int Id { get; set;}
        public string? Date { get; set;}
        public double Amount { get; set;}
        public SaleStatus Status { get; set;}
    }
}