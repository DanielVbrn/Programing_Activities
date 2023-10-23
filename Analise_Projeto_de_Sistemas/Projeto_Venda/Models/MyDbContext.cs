using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace Projeto_Venda.Models
{
    public class MyDbContext:DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options): base(options){}
        public DbSet<Seller> Sellers { get; set;}
        public DbSet<SalesRecord> SalesRecords {get; set;}
    }
}