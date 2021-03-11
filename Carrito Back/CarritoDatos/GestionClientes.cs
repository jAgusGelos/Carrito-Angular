using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarritoDatos
{
    public class GestionClientes
    {
        public static bool buscarTodo(string email, string password)
        {
            using (ClientesEntities db = new ClientesEntities())
            {
                var lst = (from c in db.clientes
                           where c.email == email
                           select new clienteToken
                           {                              
                               Password = c.password,
                           }).ToList();

                if(lst.Count == 0)
                {
                    return false;
                }

                if(lst[0].Password == password)
                {
                    return true;
                }              
                                
                return false;

            }
        }
    }
}
