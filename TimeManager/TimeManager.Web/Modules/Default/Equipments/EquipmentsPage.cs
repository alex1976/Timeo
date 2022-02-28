
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Equipments"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EquipmentsRow))]
    public class EquipmentsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Equipments/EquipmentsIndex.cshtml");
        }
    }
}