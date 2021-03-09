using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarritoDatos
{
    public class carritoCompleto
    {


        public int NroItem { get; set; }
        public int NroFactura { get; set; }
        public int Cantidad { get; set; }
        public string Nombre { get; set; }
        public double Precio { get; set; }
        public double Total { get; set; }

        public string Descripcion { get; set; }
    }
}
