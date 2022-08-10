using Microsoft.EntityFrameworkCore;


namespace DeliveryTestApi.Models
{
    public class DeliveryContext : DbContext
    {
        public DeliveryContext()
        {

        }
        public DeliveryContext(DbContextOptions<DeliveryContext> options) : base(options)
        {

        }

        //public virtual DbSet<>
        public virtual DbSet<Cliente> Clientes { get; set; } = null!;
        public virtual DbSet<Producto> Productos { get; set; } = null!;
        public virtual DbSet<Empleado> Empleados { get; set; } = null!;
        public virtual DbSet<Restaurante> Restaurantes { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.ClienteId).HasName("PK__Cliente__71ABD08735E8DFCB");
                entity.ToTable("Cliente");
            });
            
            modelBuilder.Entity<Empleado>(entity =>
            {
                entity.HasKey(e => e.IdEmpleado).HasName("PK__Empleado__CE6D8B9EB3860D95");
                entity.ToTable("Empleado");
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => e.IdProducto).HasName("PK__Producto__0988921073A6350A");
                entity.ToTable("Producto");
            });
            modelBuilder.Entity<Restaurante>(entity =>
            {
                entity.HasKey(e => e.IdRestaurante).HasName("PK__Restaura__29CE64FA69820703");
                entity.ToTable("Restaurante");
            });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-2L0QJJP;Database=DbDelivery;Integrated security=true");
            }
        }


    }
}
