using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarritoDatos
{
    public class GestionCarrito
    {

        public static List<carritoCompleto> buscarTodo(int nroFactura)
        {
            using (CarritoEntities db = new CarritoEntities())
            {


                var lst = (from c in db.carrito
                           join p in db.productos on c.codProd equals p.idArticulo
                           join f in db.facturas on c.nroFactura equals f.nroFactura
                           where (f.nroFactura == nroFactura)
                           select new carritoCompleto()
                           {
                               NroItem = c.nroItem,
                               NroFactura = c.nroFactura,
                               Nombre = p.nombre,
                               Precio = p.precio,
                               Descripcion = p.descripcion,
                               Cantidad = c.cantProd,
                               Total = p.precio * c.cantProd
                           }).ToList();
                return lst;


            }


        }

        public static void eliminarItem(int nroFactura, int nroArticulo)
        {
            using (CarritoEntities db = new CarritoEntities())
            {
                carrito cart = db.carrito.Find(nroFactura, nroArticulo);
                db.carrito.Remove(cart);
                db.SaveChanges();



            }






        }

        public static void Grabar(carrito value)
        {
            try
            {
                using (CarritoEntities db = new CarritoEntities())
                {
                    db.Entry(value).State = System.Data.Entity.EntityState.Added;
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                throw new ApplicationException("Error al grabar: " + value.ToString());
            }

        }
    }
}

