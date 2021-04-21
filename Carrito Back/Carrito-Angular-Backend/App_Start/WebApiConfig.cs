using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Cors;
using System.Web.Http.Cors;
using Carrito_Angular_Backend.Controllers;

namespace Carrito_Angular_Backend
{
    public static class WebApiConfig
    {

      
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web


            var corsAttr = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(corsAttr);
            // Rutas de API web
            config.MapHttpAttributeRoutes();
            


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}/{nroFactura}",
                defaults: new { id = RouteParameter.Optional, nroFactura = RouteParameter.Optional}
            );
        }
    }
}
