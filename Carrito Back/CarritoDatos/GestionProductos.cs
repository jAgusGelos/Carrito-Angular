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

        
    }
}
