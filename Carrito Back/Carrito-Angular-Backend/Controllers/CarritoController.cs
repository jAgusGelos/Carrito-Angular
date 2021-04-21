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
  
    public class CarritoController : ApiController
    {
        [System.Web.Http.AcceptVerbs("DELETE")]
        [System.Web.Http.HttpGet] 
        public HttpResponseMessage Delete(int id)
        {
            HttpResponseMessage msg;
            try
            {
                GestionCarrito.eliminarItem(2, id);
                msg = Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                msg = Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e.Message);

            }

            return msg;




        }

        [System.Web.Http.AcceptVerbs("DELETE")]
        [System.Web.Http.HttpGet]
        public HttpResponseMessage Delete(int id, int fc)
        {
            HttpResponseMessage msg;
            try
            {
                GestionCarrito.eliminarItem(fc, id);
                msg = Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                msg = Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e.Message);

            }

            return msg;




        }

        [System.Web.Http.AcceptVerbs("GET")]
        
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
        [System.Web.Http.AcceptVerbs("POST")]
        public void Post([FromBody] carrito value)
        {
            GestionCarrito.Grabar(value);
        }

        // PUT: api/Carrito/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Carrito/5
       


    } 
}
