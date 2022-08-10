namespace DeliveryTestApi.Models
{
    public class Cliente
    {
        public int ClienteId { get; set; }
        public string Nombre { get; set; }
        public string Email { get; set; }
        public DateTime FechaIngreso { get; set; }
        public string Contrasena { get; set; }
    }

}
