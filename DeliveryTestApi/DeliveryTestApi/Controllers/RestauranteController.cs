using DeliveryTestApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryTestApi.Controllers
{
    public class RestauranteController : Controller
    {
        private DeliveryContext _context;

        public RestauranteController()
        {
            _context = new DeliveryContext();
        }

        [HttpGet]
        public ActionResult<List<Restaurante>> Get()
        {
            var listado = _context.Restaurantes;
            return Ok(listado);
        }

        [HttpPost("{id}")]
        public ActionResult<List<Restaurante>> Get(int id)
        {
            var restaurantes = _context.Restaurantes.FirstOrDefault(x => x.IdRestaurante == id);
            if (restaurantes is null)
            {
                return NotFound();
            }
            else
            {
                return Ok(restaurantes);
            }
        }
    }
}
