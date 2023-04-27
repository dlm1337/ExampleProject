using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class NameAndAddressContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public NameAndAddressContext(DbContextOptions<NameAndAddressContext> options, IConfiguration configuration)
            : base(options)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to postgres with connection string from app settings
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<NameAndAddress> NameAndAddresses { get; set; }
    }
}