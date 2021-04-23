using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarritoDatos
{
    public class GestionProductos
    {
        public static List<productos> buscarTodo()
        {
            using(CarritoEntities1 db = new CarritoEntities1())
            {
                return db.productos.OrderBy(x => x.nombre).ToList();


            }
        }

        public static productos searchOne(int id)
        {
            using (CarritoEntities1 db = new CarritoEntities1())
            {
                return db.productos.Find(id);


            }
        }

        public static void Grabar(productos prod)
        {
            try
            {
                using (CarritoEntities1 db = new CarritoEntities1())
                {
                    db.Entry(prod).State = System.Data.Entity.EntityState.Added;
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                throw new ApplicationException("Error al grabar: " + prod.ToString());
            }
            
        }

        public static void eliminarItem(int idArticulo)
        {
            try
            {
                using (CarritoEntities1 db = new CarritoEntities1())
                {
                    var prod = db.productos.Find(idArticulo);                                
                    db.productos.Remove(prod);
                    db.SaveChanges();
                   
                }
            }
            catch (Exception e)
            {
                throw new ApplicationException("Error al Borrar el elemento: " + idArticulo.ToString());
            }

        }


    }
}
