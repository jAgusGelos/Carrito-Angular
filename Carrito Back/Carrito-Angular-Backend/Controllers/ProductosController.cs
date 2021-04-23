using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using CarritoDatos;

namespace Carrito_Angular_Backend.Controllers
{
   
    public class ProductosController : ApiController
    {
        // GET: api/Productos
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(GestionProductos.buscarTodo());
        }

        // GET: api/Productos/5
        public IHttpActionResult Get(int id)
        {
            return Ok(GestionProductos.searchOne(id));
        }

        // POST: api/Productos
        public void Post([FromBody]productos value)
        {
            GestionProductos.Grabar(value);
        }

        // PUT: api/Productos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Productos/5
        public HttpResponseMessage Delete(int id)
        {
            HttpResponseMessage msg;
            try
            {
                GestionProductos.eliminarItem(id);
                msg = Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                msg = Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e.Message);

            }

            return msg;



        }
    }
}
