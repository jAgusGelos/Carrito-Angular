using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CarritoDatos;

namespace Carrito_Angular_Backend.Controllers
{
    public class CarritoController : ApiController
    {

        // GET: api/Carrito
        public IHttpActionResult Get()
        {
            return Ok(GestionCarrito.buscarTodo(2));
        }

        // GET: api/Carrito/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Carrito
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Carrito/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Carrito/5
        public void Delete(int nroFactura, int nroItem)
        {
            GestionCarrito.eliminarItem(nroFactura, nroItem);

        }
    }
}
